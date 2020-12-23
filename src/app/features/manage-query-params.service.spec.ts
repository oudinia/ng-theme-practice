import { TestBed } from '@angular/core/testing';

import { ManageQueryParamsService } from './manage-query-params.service';

describe('ManageQueryParamsService', () => {
  let service: ManageQueryParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageQueryParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
