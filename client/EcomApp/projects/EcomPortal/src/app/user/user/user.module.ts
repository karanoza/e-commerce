import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { ProductModule } from "../product/product.module";
import { MaterialSharedModule } from "../../material-shared/material-shared/material-shared.module";
import { ProfileComponent } from "../profile/profile.component";
import { UserDashboardComponent } from "../user-dashboard/user-dashboard.component";

@NgModule({
  declarations: [ProfileComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    ProductModule,
    UserRoutingModule,
    MaterialSharedModule,
  ],
})
export class UserModule {}
