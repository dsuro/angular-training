import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customer-details3',
  templateUrl: './customer-details3.component.html',
  styleUrls: ['./customer-details3.component.css']
})
export class CustomerDetails3Component implements OnInit {
  custSelectedSubs:Subscription;
  customer:any;
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.custSelectedSubs=this.customerService.receiveSectedCustomer()
    .subscribe((message)=>{
        if(message){
          //console.log(message);
          this.customer=message['selectedCustomer'];
        }
    });
  }

}
