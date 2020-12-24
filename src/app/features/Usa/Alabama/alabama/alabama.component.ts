import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {queryParameters} from "../../../query-parameters";
import {ManageCityInfoService} from "../../../manage-city-info.service";
import {City} from "../../../city-info";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-alabama',
  templateUrl: './alabama.component.html',
  styleUrls: ['./alabama.component.scss']
})


export class AlabamaComponent implements OnInit {
  cities: City[] = [];
  citiesOf: Observable<City[]>;
  citiesOfV2: City[] = [];
  citiesOfV3: Observable<City[]>;

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

    this.cities = this.manageQueryParamsService.getCityInfo();
    this.citiesOf = this.manageQueryParamsService.getCityInfoObservable();
    this.citiesOfV3 = this.manageQueryParamsService.getCityInfoObservableV3();

    this.manageQueryParamsService.getCityInfoObservableV2().subscribe(data => {
      this.citiesOfV2 = data;
    });

    console.log(this.cities);
    console.log(this.citiesOf);
    console.log(this.citiesOfV2);
  }

}
