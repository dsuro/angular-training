import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { Subscription } from 'rxjs';
import { UserModel } from '../shared/models/user-model';
import { CustomerDetails2Component } from '../customer-details2/customer-details2.component';


@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrls: ['./customer2.component.css']
})
export class Customer2Component implements OnInit {
 @ViewChild("customerDetails") customerDetails:CustomerDetails2Component;
  custAllSubs:Subscription;
  customers:Array<UserModel>;
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();

  }
  getAllCustomers(){
    this.custAllSubs=this.customerService.getAllCustomers()
    .subscribe((customers)=>{
        if(customers){
        //console.log(customers);
          this.customers=customers;
        }
    });
  }
  onCustmerSelect(customer){
    this.customerDetails.setCustomerDetails(customer);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    if(this.custAllSubs){
        this.custAllSubs.unsubscribe();
    }
}

}
