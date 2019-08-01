import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import 'rxjs/add/observable/of';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

import { Headers, Http, HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenParams } from './classes/TokenParams';

@Injectable()
export class AuthService {
    AccessToken:string = "";
    constructor(private http:Http) { }
    private TokenAPI = 'http://192.168.50.24/v1/auth-service/login';

    login(Username:string,Password:string):Observable<TokenParams> {
        var headerForTokenAPI = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        var data = "grant_type=password&email=" + Username + "&password="+ Password;
        console.log("roshan",data);
        return this.http.post(this.TokenAPI, data, { headers: headerForTokenAPI }).map(res => res.json());

    }
}