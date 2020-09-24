import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { ProductService } from "./service/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  products: any;
  category: string;
  productCount: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap
      .pipe(map((params) => params.get("category")))
      .subscribe((data) => {
        if (data != null) {
          this.category = data;
          this.productService.getProductByCategory(data).subscribe((result) => {
            this.products = result.data;
            this.productCount = result.count;
          });
        } else {
          this.category = "All";
          this.productService.getAllProducts().subscribe((result) => {
            this.products = result.data;
            this.productCount = result.data.length;
          });
        }
      });
  }
}
