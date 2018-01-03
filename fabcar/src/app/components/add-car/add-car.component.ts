import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddCarService } from '../../services/add-car.service';
import { Car } from '../../models/car'
import { CarDetails } from '../../models/car-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private addCarService: AddCarService, private router : Router) { }

  ngOnInit() {
  }

  addCar(form: NgForm) {
    var newCar = new Car();
    var newCarDetails = new CarDetails();
    
    
    newCar.key = form.value.key;

    newCarDetails.make = form.value.make;
    newCarDetails.model = form.value.model;
    newCarDetails.colour = form.value.colour;
    newCarDetails.owner = form.value.owner;

    newCar.record = newCarDetails;

    this.addCarService.addCar(newCar).subscribe(res => {console.log(res); this.router.navigate(['']);});
  }
}
