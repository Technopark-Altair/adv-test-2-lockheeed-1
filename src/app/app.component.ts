import { Component } from '@angular/core';
import { CarService } from "src/app/car.service";
import { Car } from "src/models/car.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private carService: CarService) { }

  title = 'test';

  addNewCar(newCar: Car) {
    this.carService.addNewCar(newCar);
  }
}
