import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-recent-results',
  templateUrl: './recent-results.component.html',
  styleUrls: ['./recent-results.component.css']
})
export class RecentResultsComponent implements OnInit {
recentResults:any
constructor(private ts:HomeService) { }

  ngOnInit(): void {
    this.fetchLiveScores()
  }

  fetchLiveScores(): void {
    this.ts.getLiveMatches().subscribe(
      (res) => {
        console.log('API Response:', res); // Log the response for debugging
  
        const today = new Date().toISOString().slice(0, 10); // Get today's date in "YYYY-MM-DD" format
  
        // Filter to only include matches happening today based on dateTimeGMT
        this.recentResults = res.data.filter((match:any) => {
          return  match.status.includes("won by") || match.status.includes(" due to rain")
        });
        console.log(this.recentResults); // Log today's matches
      },
      (error) => {
        console.error('Error fetching live scores', error);
      }
    );
  }

  
}
