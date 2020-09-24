import { TestBed } from '@angular/core/testing';

import { UserOrderService } from './user-order.service';

describe('UserOrderService', () => {
  let service: UserOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
