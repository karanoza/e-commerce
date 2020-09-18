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
export class AdminGuard implements CanActivate {
  constructor(private encService: EncDecService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (sessionStorage.getItem("role") != null) {
      const role = this.encService.decrypt(sessionStorage.getItem("role"), "");
      if (role === "Admin") {
        return true;
      } else {
        this.navigateToLogin(state);
      }
    } else {
      this.navigateToLogin(state);
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  navigateToLogin(state: RouterStateSnapshot) {
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
