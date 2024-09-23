import { ComponentFixture, TestBed } from '@angular/core/testing';

import { U19formComponent } from './u19form.component';

describe('U19formComponent', () => {
  let component: U19formComponent;
  let fixture: ComponentFixture<U19formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ U19formComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(U19formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
