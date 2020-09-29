import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IResponse } from "../../../common/services/IResponse";
import { APP_CONFIG } from "../../../material-shared/material-shared/AppConfig";
import { IAppConfig } from "../../../material-shared/material-shared/IAppConfig";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getAllProducts() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + "/product");
  }

  getProductByCategory(categoryName: string) {
    return this.http.post<IResponse>(
      this.appConfig.apiEndPoint + "/product/getProductByCategory",
      { category: categoryName }
    );
  }

  getProductById(id: any) {
    return this.http.get<IResponse>(
      this.appConfig.apiEndPoint + "/product/" + id
    );
  }
}
