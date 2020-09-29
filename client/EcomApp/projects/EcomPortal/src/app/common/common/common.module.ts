import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CommonRoutingModule } from "./common-routing.module";
import { LoginComponent } from "../login/login.component";
import { MainNavComponent } from "../main-nav/main-nav.component";
import { MaterialSharedModule } from "../../material-shared/material-shared/material-shared.module";
import { RegistrationComponent } from "../registration/registration.component";

@NgModule({
  declarations: [MainNavComponent, LoginComponent, RegistrationComponent],
  imports: [MaterialSharedModule, CommonModule, CommonRoutingModule],
  exports: [MainNavComponent, LoginComponent],
})
export class MyCommonModule {}
