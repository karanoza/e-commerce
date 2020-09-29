import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartRoutingModule } from "./cart-routing.module";
import { CartComponent } from "./cart/cart.component";
import { MaterialSharedModule } from "../../material-shared/material-shared/material-shared.module";

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, MaterialSharedModule, CartRoutingModule],
})
export class CartModule {}
