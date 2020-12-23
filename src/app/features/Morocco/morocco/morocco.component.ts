import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ManageQueryParamsService} from "../../manage-query-params.service";

@Component({
  selector: 'app-morocco',
  templateUrl: './morocco.component.html',
  styleUrls: ['./morocco.component.scss']
})
export class MoroccoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageQueryParamsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = this.manageQueryParamsService.buildCityInfo(params);

      console.log(cityInfo);

    });

  }


}
