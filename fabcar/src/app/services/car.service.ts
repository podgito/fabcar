import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }
  getCars() : Observable<Car[]> {
    return this.http.get<Car[]>('mock-cars.json')          
  }
}
