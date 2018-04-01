import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../models/weather.item.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  cityName = '';
  subscription;
  subscription2;
  data: any = {};
  private searchStream = new Subject<string>();

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'City': new FormControl('', Validators.required)
    });
    this.subscription = this.searchStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((input: string) => this.weatherService.searchWeatherData(input))
      .subscribe(
        (data) => {
          this.data = data;
        }
      )
  }

  onSearchLocation(event: Event) {
    this.cityName = (<HTMLInputElement>event.target).value;
    this.searchStream
      .next(this.cityName);
  }

  onSubmit() {
    const weatherItem: WeatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
    this.weatherService.addWeatherItems(weatherItem);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
