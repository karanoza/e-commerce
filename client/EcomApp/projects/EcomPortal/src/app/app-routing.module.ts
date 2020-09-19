import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "./common/guard/admin.guard";
import { UserGuard } from "./common/guard/user.guard";

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin/admin.module").then((m) => m.AdminModule),
        canLoad: [AdminGuard],
      },
      {
        path: "user",
        loadChildren: () =>
          import("./user/user/user.module").then((m) => m.UserModule),
        canLoad: [UserGuard],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
