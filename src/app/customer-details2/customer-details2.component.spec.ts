import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetails2Component } from './customer-details2.component';

describe('CustomerDetails2Component', () => {
  let component: CustomerDetails2Component;
  let fixture: ComponentFixture<CustomerDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
