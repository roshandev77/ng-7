import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class freeApiService {
    constructor(private httpclient: HttpClient) {

    }
    getcomments(): Observable<any> {
        return this.httpclient.get("http://192.168.50.24/v1/iot_service/users");
    }
}