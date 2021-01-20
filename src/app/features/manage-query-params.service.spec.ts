import { TestBed } from '@angular/core/testing';

import { ManageCityInfoService } from './manage-city-info.service';

describe('ManageQueryParamsService', () => {
  let service: ManageCityInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCityInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
