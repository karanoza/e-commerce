import { IUser } from "./../services/user";
import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { strict } from "assert";
import { Router } from "@angular/router";
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

  constructor(
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.user).subscribe((data) => {
      if (data.status === "success") {
        this.navigate(data.role);
      } else {
        this._snackBar.open(data.message, "Login", {
          duration: 2000,
        });
      }
    });
  }

  navigate(role: string) {
    switch (role) {
      case "User":
        //redirect to user dashboard
        this.router.navigate(["/user/dashboard"]);
        break;
      case "Admin":
        //redirect to admin dashboard
        this.router.navigate(["/admin/dashboard"]);
        break;
      default:
        this._snackBar.open("User does not belongs to valid role", "Login", {
          duration: 2000,
        });
    }
  }
}
