import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {queryParameters} from "../../query-parameters";
import {CityInfo} from "../../city-info";


@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.component.html',
  styleUrls: ['./portugal.component.scss']
})
export class PortugalComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const cityInfo = <CityInfo>{};
      cityInfo.population = params[queryParameters.population];
      cityInfo.climat = params[queryParameters.climat];

      console.log(cityInfo);

    });
    console.log(this.activatedRoute.snapshot.queryParams[queryParameters.population]);
  }
}
