import { Component, OnInit } from "@angular/core";
import { UserOrderService } from "./service/user-order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  orders = [];
  displayedColumns: string[] = [
    "_id",
    "orderID",
    "total",
    "createdOn",
    "status",
    "actions",
  ];

  constructor(private orderService: UserOrderService) {}

  ngOnInit() {
    this.orderService.getUserOrders().subscribe((result) => {
      this.orders = result.data;
    });
  }
}
