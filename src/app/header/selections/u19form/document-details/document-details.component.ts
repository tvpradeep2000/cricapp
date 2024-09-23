import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersdataService } from 'src/app/services/playersdata.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {
 stylerole: any;
 playerData:any 
  response: any;
  userData: any;
  
  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient,private ts:PlayersdataService) { }
  ngOnInit(): void {
    // const savedForm = localStorage.getItem('DocumentData');
    // if (savedForm) {
    //   this.documentform.setValue(JSON.parse(savedForm));
    // }
    this.route.queryParams.subscribe(params =>{
      this.stylerole=params;
      console.log(this.stylerole)
  });
  }
  documentform=new FormGroup({
    photo:new FormControl('',[Validators.required]),
    identityProof:new FormControl('',[Validators.required]),
    acceptTerms:new FormControl('',[Validators.required]),
  })
  // onSubmit() {
  //   if (this.documentform.valid) {
  //     const data =this.documentform.value;
  //     this.router.navigate(['/playersdata'], { queryParams: data,
  //     skipLocationChange: true});
  //     console.log(this.documentform.value);
  //   }
  // }
  onSubmit(){
    if (this.documentform.valid) {
      const data =this.documentform.value;
      const fullData={...this.stylerole,...data}
      
      this.router.navigate(['/playersdata'], { queryParams: fullData,
      skipLocationChange: true});
      console.log(this.documentform.value);
      localStorage.removeItem('cricketFormData');
      localStorage.removeItem('addressFormData');
      localStorage.removeItem('playerskillFormData');
      localStorage.removeItem('DocumentData');

    }
    // this.ts.Getdata().subscribe((res:any)=>{
    //   this.response=res
    //   console.log(this.response,"response")
    // })
  }
  // get formControls() {
  //   return this.documentform.controls;
  // }
  get photo(){
    return this.documentform.get('photo')
  }
  get identityProof(){
    return this.documentform.get('identityProof')
  }
  get acceptTerms(){
    return this.documentform.get('acceptTerms')
  }



  
  goToPervious(){
    // localStorage.setItem('DocumentData', JSON.stringify(this.documentform.value))

    this.router.navigate(['/cricket-details'])
  }

}
