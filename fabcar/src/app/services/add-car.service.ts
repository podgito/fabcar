import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Car } from '../models/car'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class AddCarService {

  constructor(private http: HttpClient) { }


  addCar() {
    console.log("AddCarService");
    this.getCars();
    this.http.post('http://localhost:3000/addCar/', {
      title: 'foo',
      body: 'bar',
      userId: 1
    });

  }

  getCars() : Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/cars')          
  }
}
