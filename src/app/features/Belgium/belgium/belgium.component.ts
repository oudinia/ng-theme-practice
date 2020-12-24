import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ManageCityInfoService} from "../../manage-city-info.service";

@Component({
  selector: 'app-belgium',
  templateUrl: './belgium.component.html',
  styleUrls: ['./belgium.component.scss']
})
export class BelgiumComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }


}
