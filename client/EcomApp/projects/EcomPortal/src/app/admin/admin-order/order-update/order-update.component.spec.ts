import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUpdateComponent } from './order-update.component';

describe('OrderUpdateComponent', () => {
  let component: OrderUpdateComponent;
  let fixture: ComponentFixture<OrderUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
