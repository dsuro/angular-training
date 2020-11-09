
import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from '../shared/models/user-model';
import { AuthenticationService } from '../shared/services/authentication.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    currentUser: UserModel=null;
    currentUserSubscription: Subscription;
    constructor(private authenticationService: AuthenticationService,
       
    ) 
    {

    }
    ngOnInit() {
        this.subscibeAll();
    }
    subscibeAll(){
        this.currentUserSubscription = this.authenticationService.currentUser
        .subscribe(user => {
            if(user){
                this.currentUser = user;
                //console.log(this.currentUser);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        if(this.currentUserSubscription){
            this.currentUserSubscription.unsubscribe();
        }
    }
}
