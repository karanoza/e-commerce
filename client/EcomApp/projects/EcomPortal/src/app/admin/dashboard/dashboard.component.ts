import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./service/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  orderData: any;
  orders: any;
  displayedColumns: string[] = [
    "_id",
    "orderID",
    "total",
    "createdOn",
    "status",
    "actions",
  ];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getDashboard().subscribe((result) => {
      this.orderData = result.data;
      this.orders = result.data.orders;
    });
  }

  trackByFn(index: number, item: any) {
    return item._id;
  }
}
