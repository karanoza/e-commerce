import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { APP_CONFIG } from "../../material-shared/material-shared/AppConfig";
import { IAppConfig } from "../../material-shared/material-shared/IAppConfig";
import { IResponse } from "./loginResponse";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getCategories() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + "/category");
  }

  postCategories(category: any) {
    return this.http.post<IResponse>(
      this.appConfig.apiEndPoint + "/category",
      category
    );
  }
}
