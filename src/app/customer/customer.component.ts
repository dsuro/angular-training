import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { Subscription } from 'rxjs';
import { UserModel } from '../shared/models/user-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerService]
})
export class CustomerComponent implements OnInit {
  custAllSubs:Subscription;
  customers:Array<UserModel>;
  selectedCustomer:any=null;
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
    this.selectedCustomer=customer;
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    if(this.custAllSubs){
        this.custAllSubs.unsubscribe();
    }
}
}
