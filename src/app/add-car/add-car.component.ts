import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Car } from "src/models/car.model";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  newCar: Car = new Car();
  @Output() addedNewCar = new EventEmitter<Car>();
  constructor() {
  }

  ngOnInit(): void {
  }

  addNewCar() {
    this.addedNewCar.emit(this.newCar);
  }
}
