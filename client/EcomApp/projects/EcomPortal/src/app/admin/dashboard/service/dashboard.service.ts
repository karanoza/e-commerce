import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IResponse } from "../../../common/services/loginResponse";
import { APP_CONFIG } from "../../../material-shared/material-shared/AppConfig";
import { IAppConfig } from "../../../material-shared/material-shared/IAppConfig";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getDashboard() {
    return this.http.get<IResponse>(
      this.appConfig.apiEndPoint + "/order/admin/dashboard"
    );
  }
}
