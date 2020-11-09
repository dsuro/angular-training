import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { Customer2Component } from './customer2/customer2.component';
import { Customer3Component } from './customer3/customer3.component';
import { CustomerDetails2Component } from './customer-details2/customer-details2.component';
import { CustomerDetails3Component } from './customer-details3/customer-details3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    Customer2Component,
    Customer3Component,
    CustomerDetails2Component,
    CustomerDetails3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
