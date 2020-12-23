import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ManageQueryParamsService} from "../../manage-query-params.service";

@Component({
  selector: 'app-belgium',
  templateUrl: './belgium.component.html',
  styleUrls: ['./belgium.component.scss']
})
export class BelgiumComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageQueryParamsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }


}
