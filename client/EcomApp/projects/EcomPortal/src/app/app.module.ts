import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialSharedModule } from "./material-shared/material-shared/material-shared.module";
import { MyCommonModule } from "./common/common/common.module";
import { RouterModule } from "@angular/router";
import { UserModule } from "./user/user/user.module";
import { AdminModule } from "./admin/admin/admin.module";
import { CustomInterceptorService } from "./common/services/custom-Interceptor/custom-interceptor/custom-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProfileComponent } from "./user/profile/profile.component";
import { ErrorHandlerService } from "./common/error-handler/error-handler.service";

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialSharedModule,
    MyCommonModule,
    RouterModule.forRoot([]),
    UserModule,
    AdminModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true,
    },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
