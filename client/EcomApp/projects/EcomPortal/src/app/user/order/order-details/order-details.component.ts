import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserOrderService } from "../service/user-order.service";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.css"],
})
export class OrderDetailsComponent implements OnInit {
  orderDetails: any;
  constructor(
    private orderService: UserOrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      this.orderService.getOrderDetails(data.get("id")).subscribe((result) => {
        this.orderDetails = result.data;
      });
    });
  }
}
