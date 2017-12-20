import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { CarHistory } from '../models/car-history';

@Injectable()
export class CarHistoryService {

  constructor(private http: HttpClient) { }
  getCarHistory(key: string) : Observable<CarHistory[]> {
    return this.http.get<CarHistory[]>('http://localhost:3000/carHistory/CAR0')          
  }
}
