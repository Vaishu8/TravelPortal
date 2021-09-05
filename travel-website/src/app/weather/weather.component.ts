import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherObj : any = [];
  constructor(private shared: DatashareService) { }

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  getWeatherDetails() {
    this.shared.fetchCityWeather().subscribe(res => {
     this.weatherObj = res;
    })
  }

}
