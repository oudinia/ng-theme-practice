import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {queryParameters} from "../../../query-parameters";
import {ManageQueryParamsService} from "../../../manage-query-params.service";



@Component({
  selector: 'app-ohio',
  templateUrl: './ohio.component.html',
  styleUrls: ['./ohio.component.scss']
})
export class OhioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageQueryParamsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }

}
