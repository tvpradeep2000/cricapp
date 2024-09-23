import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentformComponent } from './documentform.component';

describe('DocumentformComponent', () => {
  let component: DocumentformComponent;
  let fixture: ComponentFixture<DocumentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
