import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playerdata',
  templateUrl: './playerdata.component.html',
  styleUrls: ['./playerdata.component.css']
})
export class PlayerdataComponent implements OnInit {
  stylerole: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.stylerole = params;
      console.log(this.stylerole)
  })
}

}
