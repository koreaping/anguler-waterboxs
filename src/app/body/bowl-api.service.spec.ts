import { TestBed } from '@angular/core/testing';

import { BowlApiService } from './bowl-api.service';

describe('BowlApiService', () => {
  let service: BowlApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
