import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {queryParameters} from "../../query-parameters";
import {CityInfo} from "../../city-info";
import {ManageCityInfoService} from "../../manage-city-info.service";


@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.component.html',
  styleUrls: ['./portugal.component.scss']
})
export class PortugalComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }


}
