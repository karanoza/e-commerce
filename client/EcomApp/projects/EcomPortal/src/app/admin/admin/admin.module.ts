import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { MaterialSharedModule } from '../../material-shared/material-shared/material-shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialSharedModule],
})
export class AdminModule {}
