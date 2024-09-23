import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanjiformComponent } from './ranjiform.component';

describe('RanjiformComponent', () => {
  let component: RanjiformComponent;
  let fixture: ComponentFixture<RanjiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanjiformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanjiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
