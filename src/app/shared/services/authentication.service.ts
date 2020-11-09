import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { SharedService } from './shared.service';
import { HttpClient} from '@angular/common/http';
import { map,tap } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;

    constructor(private sharedService:SharedService,
        private httpClient: HttpClient) {
         this.currentUserSubject = new BehaviorSubject<UserModel>(null);
         this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }
    login(username: string, password: string) {
        const resourceUrl=this.sharedService.getResourceURL('customers');
        return this.httpClient.get(resourceUrl)
        .pipe(
            map((users:Array<UserModel>) => users.find(user => user['username']==username && user['password']==password)),
            tap((user:UserModel)=>{this.currentUserSubject.next(user);})
        );
    }
    logout() {
        this.currentUserSubject.next(null);
    }
}
