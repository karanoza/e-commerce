import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { APP_CONFIG } from "../../material-shared/material-shared/AppConfig";
import { IAppConfig } from "../../material-shared/material-shared/IAppConfig";
import { IUserRegistration } from "./IRegister";
import { IResponse } from "./loginResponse";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  register(user: IUserRegistration) {
    return this.http.post<IResponse>(
      this.appConfig.apiEndPoint + "/user/registration",
      user
    );
  }
}
