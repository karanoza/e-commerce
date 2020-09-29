import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { APP_CONFIG } from "../../material-shared/material-shared/AppConfig";
import { IAppConfig } from "../../material-shared/material-shared/IAppConfig";
import { IResponse } from "../../common/services/IResponse";

@Injectable({
  providedIn: "root",
})
export class CartService {
  products = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getUserCart() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + "/cart");
  }

  addProductToCart(product: any) {
    return this.http.post<IResponse>(
      this.appConfig.apiEndPoint + "/cart",
      product
    );
  }

  addProductForCheckOut(product: any) {
    this.products.next(product);
  }

  getProductForCheckOut() {
    return this.products.asObservable();
  }
}
