import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {queryParameters} from "../../../query-parameters";
import {ManageCityInfoService} from "../../../manage-city-info.service";
import {City} from "../../../city-info";


@Component({
  selector: 'app-alabama',
  templateUrl: './alabama.component.html',
  styleUrls: ['./alabama.component.scss']
})


export class AlabamaComponent implements OnInit {
  cities: City[] = [];


  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

    this.cities = this.manageQueryParamsService.getCityInfo();

    console.log(this.cities);
  }

}
