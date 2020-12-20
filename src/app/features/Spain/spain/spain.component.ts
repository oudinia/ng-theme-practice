import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {queryParameters} from "../../query-parameters";



@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.scss']
})

export class SpainComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('population', params[queryParameters.population]);
      console.log('climat', params[queryParameters.climat]);
    });
    console.log(this.activatedRoute.snapshot.queryParams[queryParameters.population]);
  }
}
