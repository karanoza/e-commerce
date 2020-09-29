import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductComponent } from "./product.component";
import { MaterialSharedModule } from "../../material-shared/material-shared/material-shared.module";
import { UserRoutingModule } from "../user/user-routing.module";

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [MaterialSharedModule, ProductRoutingModule],
})
export class ProductModule {}
