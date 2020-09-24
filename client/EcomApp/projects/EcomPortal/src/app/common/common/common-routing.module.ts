import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegistrationComponent } from "../registration/registration.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
