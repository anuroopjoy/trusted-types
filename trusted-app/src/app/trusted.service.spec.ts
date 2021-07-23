import { TestBed } from '@angular/core/testing';

import { TrustedService } from './trusted.service';

describe('TrustedService', () => {
  let service: TrustedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrustedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
