import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ManageCityInfoService} from '../../manage-city-info.service';
import {City} from '../../city-info';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  citiesMorocco: Observable<City[]>;

  constructor(private activatedRoute: ActivatedRoute, private manageQueryParamsService: ManageCityInfoService) {
  }

  ngOnInit(): void {
    this.citiesMorocco = this.manageQueryParamsService.getCityMoroccoObservable();
    console.log(this.citiesMorocco);
  }

}
