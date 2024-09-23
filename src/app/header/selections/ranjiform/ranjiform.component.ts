import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

function ageRangeValidator(minAge: number, maxAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // return if no value is entered yet
    }

    const birthDate = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < minAge || age > maxAge) {
      return { ageRange: true };
    }
    return null;
  };
}
@Component({
  selector: 'app-ranjiform',
  templateUrl: './ranjiform.component.html',
  styleUrls: ['./ranjiform.component.css']
})
export class RanjiformComponent implements OnInit {

  ngOnInit(): void {
    const savedForm =localStorage.getItem('playerformData');
    if(savedForm){
      this.playerform.setValue(JSON.parse(savedForm));
    }
  }
  constructor(private router:Router,private http:HttpClient) { }
  playerform=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern('^[A-Z a-z]*$')],),
   SecondName:new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern('^[A-Z a-z]*$')],),
  //  Email:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{3,3}')]),
   phonenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')],),
   dateOfBirth:new FormControl('',[Validators.required,ageRangeValidator(20,45)]),
   gender:new FormControl('',[Validators.required]),
  })
  onSubmit(){
    if(this.playerform.valid){
      const Data=this.playerform.value;
      localStorage.setItem('playerformData',JSON.stringify(this.playerform.value));
      this.router.navigate(['/addressform'], {queryParams:Data,
        skipLocationChange: true});
        console.log(this.playerform.value);
      
        
      } 
    }
  get firstName(){
    
    return this.playerform.get('firstName');
  }
  get SecondName(){
    return this.playerform.get('SecondName');
  }
  // get Email(){
  //   return this.playerform.get('Email')
  // }
  get phonenumber(){
    return this.playerform.get('phonenumber');
  }
  get gender(){
    return this.playerform.get('gender');
  }
  backtoSelection(){
    this.router.navigate(['/selections'])
  }
}
