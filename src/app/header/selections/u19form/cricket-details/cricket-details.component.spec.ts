import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketDetailsComponent } from './cricket-details.component';

describe('CricketDetailsComponent', () => {
  let component: CricketDetailsComponent;
  let fixture: ComponentFixture<CricketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
