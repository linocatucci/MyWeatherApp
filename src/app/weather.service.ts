import { Injectable, OnInit } from '@angular/core';
import { WEATHER_ITEMS } from './weather-list/weather.data';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { WeatherItem } from './models/weather.item.model';

@Injectable()
export class WeatherService implements OnInit {

  weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  units = '&units=metric';
  apiKey = '&APPID=f8c6a2793062cbdd425701e66df08256';
  weatherItems = WEATHER_ITEMS;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }


  getWeatherItems() {
    console.log('in the weather service');
    return WEATHER_ITEMS;
  }

  addWeatherItems(weatherItem:WeatherItem) {
    WEATHER_ITEMS.push(weatherItem)
  }

  /*
  Todo we need to make the http call with 21.5	Http Parameters = query params!
  exmaple url: http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,NL&units=metric&APPID=f8c6a2793062cbdd425701e66df08256
  old url: return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,NL&units=metric&APPID=f8c6a2793062cbdd425701e66df08256')
   */

  searchWeatherData(cityName: string): Observable<any> {
    return this.http.get(this.weatherUrl + cityName + this.units + this.apiKey)
      .map(
        (response) => {
          console.log('api call ok');
          return response;
        }
      )
      .catch(
        (error) => {
          console.log(error);
          return error
        }
      )
  }
}
