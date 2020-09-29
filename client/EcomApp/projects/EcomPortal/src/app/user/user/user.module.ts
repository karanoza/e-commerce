import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { ProductModule } from "../product/product.module";
import { MaterialSharedModule } from "../../material-shared/material-shared/material-shared.module";
import { ProfileComponent } from "../profile/profile.component";
import { UserDashboardComponent } from "../user-dashboard/user-dashboard.component";
import { WishlistModule } from "../wishlist/wishlist.module";
import { CartModule } from "../cart/cart.module";
import { OrderModule } from "../order/order.module";
import { PaymentComponent } from "../payment/payment.component";

@NgModule({
  declarations: [ProfileComponent, UserDashboardComponent, PaymentComponent],
  imports: [
    CommonModule,
    ProductModule,
    WishlistModule,
    CartModule,
    OrderModule,
    UserRoutingModule,
    MaterialSharedModule,
  ],
})
export class UserModule {}
