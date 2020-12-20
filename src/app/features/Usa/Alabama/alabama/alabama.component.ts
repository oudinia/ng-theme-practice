import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

export const populationQS = 'population';
export const climatQS = 'climat';

@Component({
  selector: 'app-alabama',
  templateUrl: './alabama.component.html',
  styleUrls: ['./alabama.component.scss']
})


export class AlabamaComponent implements OnInit {

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
