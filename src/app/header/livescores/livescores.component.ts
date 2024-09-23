import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.css']
})
export class LivescoresComponent implements OnInit {
  liveScores: any;
  constructor(private ts:HomeService) { }

  ngOnInit(): void {
    // this.ts.getLiveMatches().subscribe((data:any)=>{
    //   this.liveMatches = data;
    // })
    
    this.fetchLiveScores();
  }

  // fetchLiveScores(): void {
  //   this.ts.getLiveMatches().subscribe(
  //     (data) => {
  //       this.liveScores = data.matches;
  //     },
  //     (error) => {
  //       console.error('Error fetching live scores', error);
  //     }
  //   );
  // }

  fetchLiveScores(): void {
    this.ts.getLiveMatches().subscribe(
      (res) => {
        console.log('API Response:', res); // Log the response for debugging
  
        const today = new Date().toISOString().slice(0, 10); // Get today's date in "YYYY-MM-DD" format
  
        // Filter to only include matches happening today based on dateTimeGMT
        this.liveScores = res.data.filter((match:any) => {
          if (match.dateTimeGMT) {
            return match.dateTimeGMT.slice(0, 10) === today; // Check if the date portion of dateTimeGMT matches today
          }
          return false;
        });
        console.log(this.liveScores); // Log today's matches
      },
      (error) => {
        console.error('Error fetching live scores', error);
      }
    );
  }
  

}
