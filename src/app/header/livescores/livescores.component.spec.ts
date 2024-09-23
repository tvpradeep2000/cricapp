import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoresComponent } from './livescores.component';

describe('LivescoresComponent', () => {
  let component: LivescoresComponent;
  let fixture: ComponentFixture<LivescoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivescoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
