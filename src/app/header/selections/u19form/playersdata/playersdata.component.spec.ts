import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersdataComponent } from './playersdata.component';

describe('PlayersdataComponent', () => {
  let component: PlayersdataComponent;
  let fixture: ComponentFixture<PlayersdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
