import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from '../models/weather.item.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem [];
  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    console.log('In the init van weather list');
    this.weatherItems = this.weatherService.getWeatherItems();
  }

}
