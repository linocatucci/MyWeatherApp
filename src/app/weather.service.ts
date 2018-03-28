import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather-list/weather.data';

@Injectable()
export class WeatherService {

  constructor() {

  }

  getWeatherItems() {
    console.log('in the weather service');
    return WEATHER_ITEMS;
  }
}
