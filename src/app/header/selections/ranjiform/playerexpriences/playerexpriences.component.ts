import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playerexpriences',
  templateUrl: './playerexpriences.component.html',
  styleUrls: ['./playerexpriences.component.css']
})
export class PlayerexpriencesComponent implements OnInit {
  battingposition=['Opening Batsman','Middle-order','Finisher','Lower-order'];
  battingStyle = ['Right-handed', 'Left-handed'];
  bowlingStyle = ['None','Right-arm Fast', 'Left-arm Fast','Rigth-arm Medium','Left-arm Medium','Off-Spinner','Leg-Spinner','Left-Arm Orthodox (Slow Left-Arm)','Left-Arm Chinaman (Unorthodox Left-Arm Spin)'];
  playerrole = ['Batsman', 'Bowler', 'Batting-All-rounder', 'Bowling-All-rounder','Wicketkeeper'];
  states=['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
                 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
 
  playerData: any;
  ngOnInit(): void {
    const savedForm=localStorage.getItem('playerroleData');
    if(savedForm){
      this.playerroles.setValue(JSON.parse(savedForm));
    }
    this.route.queryParams.subscribe(params =>{
      this.playerData = params;
      console.log(this.playerData)
    });
  }
  constructor(private router:Router, private route:ActivatedRoute,private http:HttpClient) { }
  stylerole:any
  playerroles=new FormGroup({
    battingStyle:new FormControl('',[Validators.required]),
    battingposition:new FormControl('',[Validators.required]),
    bowlingStyle:new FormControl('',[Validators.required]),
    playerrole:new FormControl('',[Validators.required]),
    statePlayedFor:new FormControl('',[Validators.required]),
  })
  onSubmit(){
    if(this.playerroles.valid) {
      const stylerole = this.playerroles.value;
      const fullData={...this.playerData,...stylerole}
      localStorage.setItem('playerroleData',JSON.stringify(this.playerroles.value));
      this.router.navigate(['/documentform'], { queryParams: fullData,
        skipLocationChange: true});
        console.log(this.playerroles.value);
    }
  }
  goToPervious(){
    this.router.navigate(['/addressform'])
  }
  

}
