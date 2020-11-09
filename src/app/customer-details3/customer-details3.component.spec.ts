import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetails3Component } from './customer-details3.component';

describe('CustomerDetails3Component', () => {
  let component: CustomerDetails3Component;
  let fixture: ComponentFixture<CustomerDetails3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetails3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
