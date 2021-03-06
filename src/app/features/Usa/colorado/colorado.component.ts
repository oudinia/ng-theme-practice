import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {queryParameters} from "../../query-parameters";
import {ManageCityInfoService} from "../../manage-city-info.service";



@Component({
  selector: 'app-colorado',
  templateUrl: './colorado.component.html',
  styleUrls: ['./colorado.component.scss']
})
export class ColoradoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }

}
