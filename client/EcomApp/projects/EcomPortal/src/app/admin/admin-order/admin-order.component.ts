import { Component, OnInit, SkipSelf } from "@angular/core";
import { AdminOrderService } from "./service/admin-order.service";

@Component({
  selector: "app-admin-order",
  templateUrl: "./admin-order.component.html",
  styleUrls: ["./admin-order.component.css"],
})
export class AdminOrderComponent implements OnInit {
  orderList: any;
  constructor(@SkipSelf() private orderService: AdminOrderService) {}

  ngOnInit() {
    this.orderService
      .getAllOrders()
      .subscribe((result) => (this.orderList = result.data));
  }
}
