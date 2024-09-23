import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liveMatches: any[]=[];
  homedata: any;

  constructor(private ts:HomeService) { }

  ngOnInit(): void {
    this.fetchLiveScores();
  }
  fetchLiveScores(): void {
    this.ts.getLiveMatches().subscribe(
      (res) => {
        console.log('API Response:', res); // Log the response for debugging
        this.homedata = res.data;
        console.log(this.homedata)
      },
      (error) => {
        console.error('Error fetching live scores', error);
      }
    );
  }
}
