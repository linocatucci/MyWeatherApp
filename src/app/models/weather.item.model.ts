export class WeatherItem {
  public cityName: string;
  public weatherDesc: string;
  public temperature: number;

  constructor( cityName: string,
               weatherDesc: string,
               temperature: number) {
    this.cityName = cityName;
    this.weatherDesc = weatherDesc;
    this.temperature = temperature;
  }
}
