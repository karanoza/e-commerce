import { Component, Input, OnInit } from "@angular/core";
import { ProductService } from "../service/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  @Input() productList: any;
  @Input() categoryName: string;
  @Input() productCount: number;
  constructor(private productService: ProductService) {}

  ngOnInit() {}
}
