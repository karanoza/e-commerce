import { TestBed } from '@angular/core/testing';

import { AdminOrderService } from './admin-order.service';

describe('AdminOrderService', () => {
  let service: AdminOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
