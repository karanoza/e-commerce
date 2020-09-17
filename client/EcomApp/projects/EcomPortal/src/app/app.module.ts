import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialSharedModule } from "./material-shared/material-shared/material-shared.module";
import { MyCommonModule } from "./common/common/common.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialSharedModule,
    MyCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
