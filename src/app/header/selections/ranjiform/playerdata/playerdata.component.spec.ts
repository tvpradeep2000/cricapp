import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerdataComponent } from './playerdata.component';

describe('PlayerdataComponent', () => {
  let component: PlayerdataComponent;
  let fixture: ComponentFixture<PlayerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
