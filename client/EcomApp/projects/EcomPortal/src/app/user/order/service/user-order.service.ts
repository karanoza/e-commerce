import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IResponse } from "../../../common/services/loginResponse";
import { APP_CONFIG } from "../../../material-shared/material-shared/AppConfig";
import { IAppConfig } from "../../../material-shared/material-shared/IAppConfig";

@Injectable({
  providedIn: "root",
})
export class UserOrderService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  placeOrder(order: any) {
    return this.http.post<IResponse>(
      this.appConfig.apiEndPoint + "/order",
      order
    );
  }

  getUserOrders() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + "/order");
  }

  getOrderDetails(orderId: any) {
    return this.http.get<IResponse>(
      this.appConfig.apiEndPoint + "/order/" + orderId
    );
  }
}
