import { TestBed } from '@angular/core/testing';

import { CatrDataService } from './catr-data.service';

describe('CatrDataService', () => {
  let service: CatrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
