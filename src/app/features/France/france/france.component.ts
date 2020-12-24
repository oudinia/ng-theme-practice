import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ManageCityInfoService} from "../../manage-city-info.service";

@Component({
  selector: 'app-france',
  templateUrl: './france.component.html',
  styleUrls: ['./france.component.scss']
})
export class FranceComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }


}
