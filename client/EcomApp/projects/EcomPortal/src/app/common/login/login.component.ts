import { IUser } from "./../services/user";
import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: IUser = {
    email: "",
    password: "",
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.user).subscribe((data) => {
      console.log(data);
    });
  }
}
