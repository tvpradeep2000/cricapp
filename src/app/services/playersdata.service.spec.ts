import { TestBed } from '@angular/core/testing';

import { PlayersdataService } from './playersdata.service';

describe('PlayersdataService', () => {
  let service: PlayersdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
