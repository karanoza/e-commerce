import { Component, OnInit } from "@angular/core";
import { ProfileService } from "./service/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService
      .getPofile()
      .subscribe((result) => (this.user = result.data));
  }
}
