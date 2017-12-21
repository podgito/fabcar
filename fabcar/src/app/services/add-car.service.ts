import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Car } from '../models/car'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class AddCarService {

  constructor(private http: HttpClient) { }


  addCar(newCar: Car) : Observable<Object> {
    console.log(newCar);
    return this.http.post('http://localhost:3000/addCar/', {
      title: 'foo',
      body: 'bar',
      car: newCar
    });
  }
}
