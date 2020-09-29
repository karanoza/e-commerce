import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WishlistRoutingModule } from "./wishlist-routing.module";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { MaterialSharedModule } from "../../material-shared/material-shared/material-shared.module";

@NgModule({
  declarations: [WishlistComponent],
  imports: [CommonModule, MaterialSharedModule, WishlistRoutingModule],
})
export class WishlistModule {}
