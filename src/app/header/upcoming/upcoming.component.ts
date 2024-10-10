import { Component,  OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  upcomingMatches: any;
  newData:any;
  error: string | null = null;
  constructor(private upcomingmatches:HomeService) { }
  ngOnInit(): void {
    this.upcomingmatches.getLiveMatches().subscribe({
      next: (data) => {
        console.log(data);

        this.upcomingMatches=data.data.filter((res:any) => {
          return res.matchStarted === false
        })
        console.log(this.upcomingMatches,);
        
        
      },
      error: (err) => {
        this.error = 'Failed to load match data.';
        console.error(err);
      }
    });
  }

  // currentSlide = 0;
  // totalSlides = 3;  

  // prevSlide() {
  //   this.currentSlide = (this.currentSlide === 0) ? this.totalSlides - 1 : this.currentSlide - 1;
  //   this.updateCarousel();
  // }

  // nextSlide() {
  //   this.currentSlide = (this.currentSlide === this.totalSlides - 1) ? 0 : this.currentSlide + 1;
  //   this.updateCarousel();
  // }

  // updateCarousel() {
  //   const carousel = document.querySelector('.carousel');
  // }
  }

