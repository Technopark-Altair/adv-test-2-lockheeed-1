import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from "src/app/car.service";
import { Car } from "src/models/car.model";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  @Input('carInput') car: Car | undefined = new Car();

  car_id: number = 0;
  preview: boolean = true;

  ngOnInit(): void {
    if (this.car && this.car.id == -1) {
      this.preview = false;
      this.route.params.subscribe((data) => {
        this.car_id = +data.id;
        this.car = this.carService.getCarByID(this.car_id);
      })
    }
  };

}
