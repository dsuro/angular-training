import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { Subscription } from 'rxjs';
import { UserModel } from '../shared/models/user-model';


@Component({
  selector: 'app-customer3',
  templateUrl: './customer3.component.html',
  styleUrls: ['./customer3.component.css']
})
export class Customer3Component implements OnInit {
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
    this.customerService.sendSectedCustomer(customer);
   // this.selectedCustomer=customer;
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    if(this.custAllSubs){
        this.custAllSubs.unsubscribe();
    }
}

}
