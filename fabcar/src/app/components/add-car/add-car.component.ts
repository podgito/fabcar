import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddCarService } from '../../services/add-car.service';
import { Car } from '../../models/car'

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private addCarService: AddCarService) { }

  ngOnInit() {
  }

  addCar(form: NgForm) {
    console.log(form);
    var newCar = new Car();
    newCar.Key = form.value.key;
    newCar.Record.make = form.value.make;
    newCar.Record.model = form.value.model;
    newCar.Record.colour = form.value.colour;
    newCar.Record.owner = form.value.owner;

    console.log(newCar);
    //this.addCarService.addCar().subscribe(res => console.log(res));
  }
}
