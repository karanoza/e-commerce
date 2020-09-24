import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../common/guard/auth.guard";
import { AdminOrderComponent } from "../admin-order/admin-order.component";
import { OrderUpdateComponent } from "../admin-order/order-update/order-update.component";
import { AdminProductComponent } from "../admin-product/admin-product.component";
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
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "product",
    component: AdminProductComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "order",
    component: AdminOrderComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "order/:id",
    component: OrderUpdateComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
