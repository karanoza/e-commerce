import { IUser } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from ".../../../projects/EcomPortal/src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: IUser) {
    return this.http.post(environment.apiENDPoint + "/user/login", user);
  }
}
