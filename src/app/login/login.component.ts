import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loginFailed:boolean=false;
  user: Object = {
    username:'',
    password:''
  };
  loginSubs:Subscription;

  constructor(private formBuilder: FormBuilder,
      private router: Router,
      private route:ActivatedRoute,
      private authenticationService: AuthenticationService
  ) {


  }

  ngOnInit() {
     if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
      }
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      if(this.route && this.route.snapshot){
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      }
  }
  // convenience getter for easy access to form fields
  get formDetails() { return this.loginForm.controls; }

  //#region [Reactive Forms]
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          this.loginFailed=true;
          return;
      }
      this.loading = true;

      this.loginSubs=this.authenticationService.login(this.formDetails.username.value, this.formDetails.password.value)
          .subscribe(
              (data) => {
                //console.log(data);
                  if(data){
                  
                    this.loginFailed=false;
                    this.router.navigate([this.returnUrl]);
                  }
                  else
                  {
                    this.loginFailed=true;
                    this.loading = false; 
                  }
              },
              (error) => {
                this.loginFailed=true;
                this.loading = false;
              });
  }
  //#endregion
  //#region [Template driven Forms]
  onSubmitForm() {
    //console.log(this.user);
      this.submitted = true;
      this.loading = true;
      // stop here if form is invalid
      if (this.user['username'] && this.user['password']) {
        //this.user['username']="animesh";
        //this.user['password']="123456";
        this.loginSubs=this.authenticationService.login(this.user['username'],this.user['password'])
            .subscribe(
                (data) => {
                  //console.log(data);
                    if(data){
                    
                      this.loginFailed=false;
                      this.router.navigate([this.returnUrl]);
                    }
                    else
                    {
                      this.loginFailed=true;
                      this.loading = false; 
                    }
                },
                (error) => {
                  this.loginFailed=true;
                  this.loading = false;
                });
      }
      else{
        this.loginFailed=true;
        return;
      }
  }
  //#endregion
  onRegistration(){
    this.router.navigate(['/registration'], { skipLocationChange:true});
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.loginSubs){
      this.loginSubs.unsubscribe();
      this.loginSubs=null;
    }
  }
}
