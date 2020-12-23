import {Injectable} from '@angular/core';
import {CityInfo} from "./city-info";
import {queryParameters} from "./query-parameters";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ManageQueryParamsService {

  constructor() {
  }

  buildCityInfo(params: Params): CityInfo {
    const cityInfo = <CityInfo>{};
    cityInfo.population = params[queryParameters.population];
    cityInfo.climat = params[queryParameters.climat];
    return cityInfo;
  }
}
