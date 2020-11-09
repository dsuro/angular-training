/*Module Section */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { routing } from '../app.routing';
/*Service Section*/
import { SharedService } from './services/shared.service';
import { AuthenticationService } from './services/authentication.service';
/*Component Section*/

/*Directive Section*/
import { RowHoverDirective } from './directives/row-hover.directive';
/*Pipe Section*/
import { CarColorPipe } from './pipes/car-color.pipe';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CustomerService } from './services/customer.service';
import { ContcatNamesPipe } from './pipes/contcat-names.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    TabsModule.forRoot(),
    TableModule,
    DropdownModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    TableModule,
    DropdownModule,
    CarColorPipe,
    RowHoverDirective,
    ContcatNamesPipe
  ],
  declarations: [
    CarColorPipe,
    RowHoverDirective,
    ContcatNamesPipe
  ]
})
export class SharedModule { 

  public static forRoot(): ModuleWithProviders 
  {
    return {
      ngModule: SharedModule, 
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
        SharedService,
        CustomerService,
        AuthenticationService
      ]
    };
  }
}
