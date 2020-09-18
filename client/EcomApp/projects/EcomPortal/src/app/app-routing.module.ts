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
        loadChildren: "../../src/app/admin/admin/admin.module.ts#AdminModule",
        canLoad: [AdminGuard],
      },
      {
        path: "user",
        loadChildren: "../../src/app/user/user/user.module.ts#AdminModule",
        canLoad: [UserGuard],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
