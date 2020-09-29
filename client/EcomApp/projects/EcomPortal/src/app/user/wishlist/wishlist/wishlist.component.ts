import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTable } from "@angular/material/table";
import { WishlistService } from "../wishlist.service";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"],
})
export class WishlistComponent implements OnInit {
  @ViewChild("wishListTable") wishListTable: MatTable<any>;
  wishList = [];
  displayedColumns: string[] = ["imageUrl", "productName", "price", "actions"];
  constructor(private wishListService: WishlistService) {}

  ngOnInit() {
    this.wishListService.getWishList().subscribe((result) => {
      result.data.forEach((product: any) => {
        this.wishList.push(product.UserWishList[0]);
      });
      this.wishListTable.dataSource = this.wishList;
      this.wishListTable.renderRows();
    });
  }

  delete(row) {
    console.log(row);
  }
}
