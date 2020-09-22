import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IResponse } from "../../../common/services/loginResponse";
import { APP_CONFIG } from "../../../material-shared/material-shared/AppConfig";
import { IAppConfig } from "../../../material-shared/material-shared/IAppConfig";

@Injectable({
  providedIn: "root",
})
export class AdminOrderService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getAllOrders() {
    return this.http.get<IResponse>(
      this.appConfig.apiEndPoint + "/order/admin"
    );
  }

  updateOrderStatus(orderDetails: any) {
    return this.http.put<IResponse>(
      this.appConfig.apiEndPoint + "/order",
      orderDetails
    );
  }

  gerOrderDetails(orderId: any) {
    return this.http.get<IResponse>(
      this.appConfig.apiEndPoint + "/order/" + orderId
    );
  }
}
