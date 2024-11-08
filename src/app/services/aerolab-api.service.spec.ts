import { TestBed } from '@angular/core/testing';

import { AerolabApiService } from './aerolab-api.service';

describe('AerolabApiService', () => {
  let service: AerolabApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AerolabApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
