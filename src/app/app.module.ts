import { WeatherListComponent } from "./weather-list/weather-list.component";
import { WeatherItemComponent } from "./weather-item/weather-item.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";


import { WeatherService } from './weather.service';
import { WeatherSearchComponent } from './weather-search/weather-search.component';


@NgModule({
  declarations: [AppComponent, WeatherListComponent, WeatherItemComponent, WeatherSearchComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
