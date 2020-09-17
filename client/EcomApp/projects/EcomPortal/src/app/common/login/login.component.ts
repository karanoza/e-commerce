import { IUser } from "./../services/user";
import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.user);
  }
}
