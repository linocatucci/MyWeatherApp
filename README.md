# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Building the app WeatherApp 

We use the openweather api :
[https://home.openweathermap.org]

# Weather app API calls per day
**London**
api.openweathermap.org/data/2.5/find?q=London,UK&units=metric&appid=f8c6a2793062cbdd425701e66df08256

**Amsterdam**
api.openweathermap.org/data/2.5/find?q=Amsterdam,NL&units=metric&appid=f8c6a2793062cbdd425701e66df08256

# Build process outline

1. write some dummy data which can be listed in the output as we see in the screenshot.
 
  # Component details
 - we need a couple of components (2x)
    - the list component to list the output/searched city
    - and each weather item component (weather-item component)
    
# create a type for the weather-item 
 
 1. create a special class, a model for the weather item.
 2. declare a property in the weather-item comp, which is of type weather Model ( weatherItem: WeatherItem;)
 3. 
 
    
