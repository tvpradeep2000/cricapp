import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css']
})
export class SelectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('cricketFormData');
    localStorage.removeItem('addressFormData');
    localStorage.removeItem('playerskillFormData');
    localStorage.removeItem('DocumentData');
    localStorage.removeItem('playerformData');
    localStorage.removeItem('addressformData');
    localStorage.removeItem('playerroleData');
    localStorage.removeItem('documentformData');
  }
}
