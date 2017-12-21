import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddCarService {

  constructor(private http: HttpClient) { }


  addCar() {
    console.log("AddCarService");
    this.http.get('http://localhost:3000/');
    this.http.post('http://localhost:3000/addCar/', {
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  }
}
