import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {queryParameters} from "../../../query-parameters";



@Component({
  selector: 'app-ohio',
  templateUrl: './ohio.component.html',
  styleUrls: ['./ohio.component.scss']
})
export class OhioComponent implements OnInit {

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
