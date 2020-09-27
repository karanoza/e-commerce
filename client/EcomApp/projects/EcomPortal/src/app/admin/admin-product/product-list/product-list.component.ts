import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class AdminProductListComponent implements OnInit {
  displayedColumns = ["_id", "category", "productName", "price", "outOfStock"];
  @Input() productList: any;
  constructor() {}

  ngOnInit() {}
}
