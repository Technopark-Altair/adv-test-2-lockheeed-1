import { Component, OnInit } from '@angular/core';
import { Car } from "src/models/car.model";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  newCar: Car;

  constructor() {
  }

  ngOnInit(): void {
    this.newCar = new Car();
  }

}
