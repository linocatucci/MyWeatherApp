import { Component, Input, OnInit } from "@angular/core";
import { WeatherItem } from "../models/weather.item.model";

@Component({
  selector: "app-weather-item",
  templateUrl: "./weather-item.component.html",
  styleUrls: ["./weather-item.component.css"]
})
export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem: WeatherItem;

  constructor() {
    // this.weatherItem = new WeatherItem("London", "Rainy", 10);
  }

  ngOnInit() {
    console.log('in de item comp!');
  }
}

