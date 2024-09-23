import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersdataService } from 'src/app/services/playersdata.service';

@Component({
  selector: 'app-playersdata',
  templateUrl: './playersdata.component.html',
  styleUrls: ['./playersdata.component.css']
})
export class PlayersdataComponent implements OnInit {
  // @Input() 
  // @Output() userDataEvent=new EventEmitter();
  userData1:any;
  stylerole: any; 
  // response: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.stylerole = params;
      console.log(this.stylerole)
  }) 
}
// Getdata1(){
//   this.ts.Getdata().subscribe((res:any)=>{
//     this.response=res
//     console.log(this.response)
//   })
}
// getDeletemovies(id:any){
//   this.ts.getDeletemovie(id).subscribe((res:any)=>{
//     this.Getdata1()
//   })
// }

// addmovies(product:any){
//   this.ts.addmovie(product).subscribe((res)=>{
//     this.Getdata1()
//   })
// }
// editmovies(product:any){
//   this.ts.editmovie(product).subscribe((res:any)=>{
//     this.Getdata1()
//     })
// }


