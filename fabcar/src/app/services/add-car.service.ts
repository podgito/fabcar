import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import {Headers, RequestOptions} from '@angular/http';



import { Car } from '../models/car'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class AddCarService {

  constructor(private http: HttpClient) { }


  addCar(newCar: Car) : Observable<Object> {
    let body = JSON.stringify(newCar);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log(newCar);
    return this.http.post('http://localhost:3000/addCar/', body, {headers : headers});
  }
}
