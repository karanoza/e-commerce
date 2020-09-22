import { IAppConfig } from "./../../../material-shared/material-shared/IAppConfig";
import { APP_CONFIG } from "./../../../material-shared/material-shared/AppConfig";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IResponse } from "../../../common/services/loginResponse";

@Injectable({
  providedIn: "root",
})
export class AdminProductService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  addProduct(imageUrl: File, product: any) {
    const formData = new FormData();
    formData.append("file", imageUrl, imageUrl.name);
    formData.append("productName", product.productName);
    formData.append("category", product.category);
    formData.append("description", product.description);
    formData.append("price", product.price);

    return this.http.post<IResponse>(
      this.appConfig.apiEndPoint + "/product",
      formData
    );
  }

  getProductList() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + "/product");
  }
}
