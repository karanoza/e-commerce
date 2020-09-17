import { IUser } from "./user";
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAppConfig } from "../../material-shared/material-shared/IAppConfig";
import { APP_CONFIG } from "../../material-shared/material-shared/AppConfig";
import { environment } from ".../../../projects/EcomPortal/src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {
    console.log(appConfig.apiEndPoint);
  }

  login(user: IUser) {
    return this.http.post(environment.apiENDPoint + "/user/login", user);
  }
}
