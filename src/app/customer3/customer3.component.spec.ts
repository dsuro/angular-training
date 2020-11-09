import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customer3Component } from './customer3.component';

describe('Customer3Component', () => {
  let component: Customer3Component;
  let fixture: ComponentFixture<Customer3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customer3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
