import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderRoutingModule } from "./order-routing.module";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { OrderComponent } from "./order.component";
import { MaterialSharedModule } from "../../material-shared/material-shared/material-shared.module";

@NgModule({
  declarations: [OrderComponent, OrderDetailsComponent],
  imports: [MaterialSharedModule, OrderRoutingModule],
})
export class OrderModule {}
