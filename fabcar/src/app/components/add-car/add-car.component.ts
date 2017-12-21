import { Component, OnInit } from '@angular/core';
import { AddCarService } from '../../services/add-car.service'

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private addCarService: AddCarService) { }

  ngOnInit() {
  }

  addCar() {
    console.log("ADD");
    this.addCarService.addCar();
  }
}
