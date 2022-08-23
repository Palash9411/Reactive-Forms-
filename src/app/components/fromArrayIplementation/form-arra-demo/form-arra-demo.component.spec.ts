import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArraDemoComponent } from './form-arra-demo.component';

describe('FormArraDemoComponent', () => {
  let component: FormArraDemoComponent;
  let fixture: ComponentFixture<FormArraDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArraDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArraDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
