import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SharedService } from './shared.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class CustomerService {
  private selectedCustomer$=new Subject();
  constructor(private sharedService:SharedService,
    private httpClient: HttpClient) { }

  public getAllCustomers(){
    const resourceUrl=this.sharedService.getResourceURL('customers');
    return this.httpClient.get(resourceUrl).pipe(map(reponse =>reponse as Array<any>));
  }
  sendSectedCustomer(selectedCustomer){
    this.selectedCustomer$.next({selectedCustomer:selectedCustomer});
  }
  receiveSectedCustomer(){
      return this.selectedCustomer$.asObservable();
  }
  register(customer){
    console.log(customer);
    const resourceUrl=this.sharedService.getResourceURL('customers');
    return this.httpClient.post(resourceUrl,customer).pipe(map(reponse =>reponse as Array<any>));
  }
}
