import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-details2',
  templateUrl: './customer-details2.component.html',
  styleUrls: ['./customer-details2.component.css']
})
export class CustomerDetails2Component implements OnInit {
  customer:any;
  constructor() { }

  ngOnInit() {
  }
  setCustomerDetails(selectedCustomer){
    this.customer=selectedCustomer;
  }
}
