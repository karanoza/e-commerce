import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../common/guard/auth.guard";
import { UserGuard } from "../guard/user.guard";
import { ProfileComponent } from "../profile/profile.component";
import { UserDashboardComponent } from "../user-dashboard/user-dashboard.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: UserDashboardComponent,
    canActivate: [AuthGuard, UserGuard],
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard, UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
