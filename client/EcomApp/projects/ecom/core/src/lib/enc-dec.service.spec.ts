import { TestBed } from '@angular/core/testing';

import { EncDecService } from './enc-dec.service';

describe('EncDecService', () => {
  let service: EncDecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncDecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
