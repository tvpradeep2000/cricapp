import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cricket-details',
  templateUrl: './cricket-details.component.html',
  styleUrls: ['./cricket-details.component.css']
})
export class CricketDetailsComponent implements OnInit {
  battingStyle = ['Right-handed', 'Left-handed'];
  bowlingStyle = ['None','Right-arm Fast', 'Left-arm Fast','Rigth-arm Medium','Left-arm Medium','Off-Spinner','Leg-Spinner','Left-Arm Orthodox (Slow Left-Arm)','Left-Arm Chinaman (Unorthodox Left-Arm Spin)'];
  battingposition=['Opening Batsman','Middle-order','Finisher','Lower-order'];
  playerrole = ['Batsman', 'Bowler', 'Batting-All-rounder', 'Bowling-All-rounder','Wicketkeeper'];
  // @Input() 
  // @Output() userDataEvent=new EventEmitter();
  playerData: any;
  ngOnInit(): void {
    const savedForm = localStorage.getItem('playerskillFormData');
    if (savedForm) {
      this.playerskill.setValue(JSON.parse(savedForm));
    }
    this.route.queryParams.subscribe(params =>{
      // this.userData= params;
      // console.log(this.userData)
      this.playerData = params;
      console.log(this.playerData)
  });
//   this.route.queryParams.subscribe(params =>{
//     this.userData= params;
//     console.log(this.userData)
// });
  }
  constructor(private router:Router, private route:ActivatedRoute,private http:HttpClient) { }
  // stylerole:any
  userData:any
  playerskill=new FormGroup({
    battingStyle:new FormControl('',[Validators.required]),
    bowlingStyle:new FormControl('',[Validators.required]),
    battingposition:new FormControl('',[Validators.required]),
    playerrole:new FormControl('',[Validators.required]),
  })
  onSubmit(){
    if(this.playerskill.valid) {
      const stylerole = this.playerskill.value;
      const fullData={...this.playerData,...stylerole}
       // Save the form data to localStorage
       localStorage.setItem('playerskillFormData', JSON.stringify(this.playerskill.value));
      this.router.navigate(['/document-details'], { queryParams: fullData,
        skipLocationChange: true});
        console.log(this.playerskill.value);
    }


  }
  goToPervious(){
    this.router.navigate(['/address-details'])
  }
}
