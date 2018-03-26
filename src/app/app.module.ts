import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { WeatherItemComponent } from "./weather-item/weather-item.component";
import { WeatherListComponent } from "./weather-list/weather-list.component";

@NgModule({
  declarations: [AppComponent, WeatherItemComponent, WeatherListComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
