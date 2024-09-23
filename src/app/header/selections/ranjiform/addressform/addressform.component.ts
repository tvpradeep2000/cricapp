import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addressform',
  templateUrl: './addressform.component.html',
  styleUrls: ['./addressform.component.css']
})
export class AddressformComponent implements OnInit {
  userData: any; 
  response: any
  constructor(private router:Router, private route:ActivatedRoute, private http:HttpClient) { }
  addressform=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{3,3}')]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required, Validators.pattern(/^\d{6}$/)]),
  })
  onSubmit(){
    if(this.addressform.valid){
      const playerData=this.addressform.value;
      localStorage.setItem('addressformData',JSON.stringify(this.addressform.value));
      const fullData={...this.userData,...playerData}
      this.router.navigate(['/playerexpriences'],{queryParams:fullData,skipLocationChange:true});
      console.log(this.addressform.valid)
    }
  }
  get email(){
    return this.addressform.get('email')
  }
  get address(){
    return this.addressform.get('address')
  }
  get city(){
    return this.addressform.get('city')
  }
  get state(){
    return this.addressform.get('state')
  }
  get pincode(){
    return this.addressform.get('pincode')
  }
  ngOnInit(): void {
    const savedForm=localStorage.getItem('addressformData');
    if(savedForm) {
      this.addressform.setValue(JSON.parse(savedForm))
    }
    this.route.queryParams.subscribe(params =>{
      this.userData = params;
      console.log(this.userData)
  });
}
goToPervious(){
  this.router.navigate(['/ranjiform'])
}
}
