import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  Router,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { EncDecService } from "projects/ecom/core/src/lib/enc-dec.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanLoad {
  constructor(private encService: EncDecService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem("role") != null) {
      const role = this.encService.decrypt(sessionStorage.getItem("role"), "");
      if (role === "Admin") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
