import {Injectable} from '@angular/core';
import {cities, City, CityInfo} from "./city-info";
import {queryParameters} from "./query-parameters";
import {Params} from "@angular/router";
import {of} from "rxjs";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManageCityInfoService {

  constructor(private httpClient: HttpClient) {
  }

  buildCityInfo(params: Params): CityInfo {
    const cityInfo = <CityInfo>{};
    cityInfo.population = params[queryParameters.population];
    cityInfo.climat = params[queryParameters.climat];
    return cityInfo;
  }

  getCityInfo(): City[] {
    return cities;
  }

  getCityInfoObservable(): Observable<City[]> {
    return of(cities);
  }

  getCityInfoObservableV2(): Observable<City[]> {
    return of(cities);
  }

  getCityInfoObservableV3(): Observable<City[]> {
    return this.httpClient.get<Array<City>>('http://localhost:3000/cities');
  }

  getCityMoroccoObservable(): Observable<City[]> {
    return of(cities);
  }
}
