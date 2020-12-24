import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {queryParameters} from "../../query-parameters";
import {ManageCityInfoService} from "../../manage-city-info.service";



@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.scss']
})

export class SpainComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }

}
