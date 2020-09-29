import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../../cart/cart.service";
import { WishlistService } from "../../wishlist/wishlist.service";
import { ProductService } from "../service/product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  quantity: FormControl;
  productDetails: any;
  constructor(
    private productService: ProductService,
    private wishListService: WishlistService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.quantity = new FormControl("1");
    this.route.paramMap.subscribe((data) => {
      this.productService.getProductById(data.get("id")).subscribe((result) => {
        this.productDetails = result.data;
      });
    });
  }

  addToCart(productDetails: any) {
    const productData = {
      productId: productDetails,
      quantity: this.quantity.value,
    };
    this.cartService.addProductToCart(productData).subscribe((result) => {
      this.snackBar.open("Product Added to Cart!", "Product", {
        duration: 1000,
      });
    });
  }

  addToWishlist(productId: any) {
    this.wishListService.addProductToWishList(productId).subscribe((result) => {
      this.snackBar.open("Product Added to WishList!", "Product", {
        duration: 1000,
      });
    });
  }
}
