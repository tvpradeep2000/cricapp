import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  // @Input() userData: any; 
  // @Output() userDataEvent=new EventEmitter();
  response: any
  userData: any;
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
      const fullData={...this.userData,...playerData}
      localStorage.setItem('addressFormData', JSON.stringify(this.addressform.value));

      this.router.navigate(['/cricket-details',],{queryParams:fullData,skipLocationChange:true});
      console.log(this.addressform.value)
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
    // Retrieve form data from localStorage if available
    const savedForm = localStorage.getItem('addressFormData');
    if (savedForm) {
      this.addressform.setValue(JSON.parse(savedForm));
    }
    this.route.queryParams.subscribe(params =>{
      this.userData = params;
      console.log(this.userData)
  });
}
goToPervious(){
  this.router.navigate(['/u19form'])
}
}
