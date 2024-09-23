import { TestBed } from '@angular/core/testing';

import { UpcomingdataService } from './upcomingdata.service';

describe('UpcomingdataService', () => {
  let service: UpcomingdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
