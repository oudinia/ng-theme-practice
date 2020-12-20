import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


export const populationQS = 'population';
export const climatQS = 'climat';

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
      console.log('population', params[populationQS]);
      console.log('climat', params[climatQS]);
    });
    console.log(this.activatedRoute.snapshot.queryParams[populationQS]);
  }
}
