import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { Customer2Component } from './customer2/customer2.component';
import { Customer3Component } from './customer3/customer3.component';
import { RegistrationComponent } from './registration/registration.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'customer1', component: CustomerComponent, canActivate: [AuthGuard] },
    { path: 'customer2', component: Customer2Component, canActivate: [AuthGuard] },
    { path: 'customer3', component: Customer3Component, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

//export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash:true});
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);