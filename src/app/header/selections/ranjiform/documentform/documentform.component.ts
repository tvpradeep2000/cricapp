import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-documentform',
  templateUrl: './documentform.component.html',
  styleUrls: ['./documentform.component.css']
})
export class DocumentformComponent implements OnInit {
  stylerole: any; // Define a property to hold the user data
  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient) { }
  documentform=new FormGroup({
    photo:new FormControl('',[Validators.required]),
    identityProof:new FormControl('',[Validators.required]),
    acceptTerms:new FormControl('',[Validators.required]),
  })
  onSubmit() {
    if (this.documentform.valid) {
      const data =this.documentform.value;
      const fullData={...this.stylerole,...data}
      localStorage.setItem('documentformData',JSON.stringify(this.documentform.value))
      this.router.navigate(['/playerdata'], { queryParams: fullData,
      skipLocationChange: true});
      console.log(this.documentform.value);
    }
  }
  get photo(){
    return this.documentform.get('photo')
  }
  get identityProof(){
    return this.documentform.get('identityProof')
  }
  get acceptTerms(){
    return this.documentform.get('acceptTerms')
  }
  ngOnInit(): void {
    const savedForm=localStorage.getItem('documentformData');
    if(savedForm){
      this.documentform.setValue(JSON.parse(savedForm));
    }
    this.route.queryParams.subscribe(params=>{
      this.stylerole=params;
      console.log(this.stylerole)
    });
  }
  goToPervious(){
    this.router.navigate(['/playerexpriences'])
  }
}
