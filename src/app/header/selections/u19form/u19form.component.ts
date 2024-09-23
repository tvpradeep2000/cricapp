import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

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
  selector: 'app-u19form',
  templateUrl: './u19form.component.html',
  styleUrls: ['./u19form.component.css']
})
export class U19formComponent implements OnInit {
  
  userData1:any;
  
  constructor(private router:Router,private http:HttpClient) { }
  cricketform=new FormGroup({
    PlayerName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Z a-z]*$')],),
    age:new FormControl('',[Validators.required,Validators.min(15),Validators.max(19)],),
    phonenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')],),
    gender:new FormControl('',[Validators.required]),
    dateOfBirth:new FormControl('',[Validators.required,ageRangeValidator(15,19)])
  })
   
  ngOnInit(): void {  
    const savedForm = localStorage.getItem('cricketFormData');
    if (savedForm) {
      this.cricketform.setValue(JSON.parse(savedForm));
    }
  }

  onSubmit(){
    if(this.cricketform.valid) {
      const userData1 = this.cricketform.value;
      // Save the form data to localStorage
      localStorage.setItem('cricketFormData', JSON.stringify(this.cricketform.value));
      this.router.navigate(['/address-details'], { queryParams: userData1,
        skipLocationChange: true});
        console.log(this.cricketform.value);
    }
    

  }

  get PlayerName(){
    
    return this.cricketform.get('PlayerName');
  }
  get age()
  {
    return this.cricketform.get('age');
  } 
  get phonenumber()
  {
    return this.cricketform.get('phonenumber')
  }
  get gender()
  {
    return this.cricketform.get('gender')
  }
  get dateOfBirth()
  {
    return this.cricketform.get('dateOfBirth');
  } 
  backtoSelection(){
    this.router.navigate(['/selections'])
  }
}
