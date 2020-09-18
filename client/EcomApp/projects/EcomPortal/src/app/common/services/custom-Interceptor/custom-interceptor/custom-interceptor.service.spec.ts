import { TestBed } from '@angular/core/testing';

import { CustomInterceptorService } from './custom-interceptor.service';

describe('CustomInterceptorService', () => {
  let service: CustomInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
