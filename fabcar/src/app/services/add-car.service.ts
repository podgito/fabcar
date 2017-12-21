import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddCarService {

  constructor(private http: HttpClient) { }


  addCar() {
    return this.http.post('http://localhost:3000/addCar/', '')          
  }
}
