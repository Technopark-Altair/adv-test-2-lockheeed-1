import { Component, OnInit } from '@angular/core';
import { CarService } from "src/app/car.service";
import { Car } from "src/models/car.model";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carService: CarService) { }

  cars: Car[] = this.carService.getAll();

  ngOnInit(): void {
    console.log(this.cars);
  }

}
