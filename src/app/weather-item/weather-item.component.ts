import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../models/weather.item.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  weatherItem: WeatherItem;

  constructor() {
    this.weatherItem = new WeatherItem('London', 'Rainy', 10)
  }

  ngOnInit() {
  }

}
