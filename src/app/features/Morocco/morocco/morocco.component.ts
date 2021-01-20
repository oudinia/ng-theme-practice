import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ManageCityInfoService} from "../../manage-city-info.service";

@Component({
  selector: 'app-morocco',
  templateUrl: './morocco.component.html',
  styleUrls: ['./morocco.component.scss']
})
export class MoroccoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }


}
