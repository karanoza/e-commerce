import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../common/guard/auth.guard";
import { UserGuard } from "../guard/user.guard";
import { UserDashboardComponent } from "../user-dashboard/user-dashboard.component";

const routes: Routes = [
  {
    path: "user/dashboard",
    component: UserDashboardComponent,
    canActivate: [AuthGuard, UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
