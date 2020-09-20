import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../common/guard/auth.guard";
import { CategoryComponent } from "../category/category.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AdminGuard } from "../guard/admin.guard";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "category",
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
