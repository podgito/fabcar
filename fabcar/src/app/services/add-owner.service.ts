import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Car } from '../models/car'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class AddOwnerService {

  constructor(private http: HttpClient) { }


  addOwner(carKey: string, owner: string) : Observable<Object> {
    var params = {"key": carKey, "owner": owner};
    let body = JSON.stringify(params);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/addOwner/', body, {headers : headers});
  }
}
