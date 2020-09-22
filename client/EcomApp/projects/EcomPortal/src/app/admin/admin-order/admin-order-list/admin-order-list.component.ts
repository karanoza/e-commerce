import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-order-list",
  templateUrl: "./admin-order-list.component.html",
  styleUrls: ["./admin-order-list.component.css"],
})
export class AdminOrderListComponent implements OnInit {
  @Input() orders: any;
  displayedColumns: string[] = [
    "_id",
    "orderID",
    "total",
    "createdOn",
    "status",
    "actions",
  ];

  constructor() {}

  ngOnInit() {}
}
