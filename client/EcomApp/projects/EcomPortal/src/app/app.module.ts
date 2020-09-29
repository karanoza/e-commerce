import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialSharedModule } from "./material-shared/material-shared/material-shared.module";
import { MyCommonModule } from "./common/common/common.module";
import { RouterModule } from "@angular/router";

import { CustomInterceptorService } from "./common/services/custom-Interceptor/custom-interceptor/custom-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ErrorHandlerService } from "./common/error-handler/error-handler.service";
import { CategoryComponent } from "./admin/category/category.component";
import { CategoryAddComponent } from "./admin/category/category-add/category-add.component";
import { CategoryListComponent } from "./admin/category/category-list/category-list.component";
import { AdminOrderComponent } from "./admin/admin-order/admin-order.component";
import { AdminProductComponent } from "./admin/admin-product/admin-product.component";
import { AdminOrderListComponent } from "./admin/admin-order/admin-order-list/admin-order-list.component";
import { OrderUpdateComponent } from "./admin/admin-order/order-update/order-update.component";
import { ProductAddComponent } from "./admin/admin-product/product-add/product-add.component";
import { AdminProductListComponent } from "./admin/admin-product/product-list/product-list.component";

import { RegistrationComponent } from "./common/registration/registration.component";
import { OrderComponent } from "./user/order/order.component";
import { OrderDetailsComponent } from "./user/order/order-details/order-details.component";
import { PaymentComponent } from "./user/payment/payment.component";

@NgModule({
  declarations: [
    AppComponent,

    CategoryComponent,
    CategoryAddComponent,
    CategoryListComponent,
    AdminOrderComponent,
    AdminProductComponent,
    AdminOrderListComponent,
    OrderUpdateComponent,
    ProductAddComponent,

    AdminProductListComponent,

    RegistrationComponent,
    OrderComponent,
    OrderDetailsComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialSharedModule,
    MyCommonModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [RouterModule],
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
