import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  addCar(form: NgForm) {
    console.log("ADD");
    this.addCarService.getCars();
    this.addCarService.addCar();
  }
}
