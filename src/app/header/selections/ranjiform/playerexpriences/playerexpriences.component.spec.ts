import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerexpriencesComponent } from './playerexpriences.component';

describe('PlayerexpriencesComponent', () => {
  let component: PlayerexpriencesComponent;
  let fixture: ComponentFixture<PlayerexpriencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerexpriencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerexpriencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
