import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { EncDecService } from "projects/ecom/core/src/lib/enc-dec.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserGuard implements CanActivate {
  constructor(private encService: EncDecService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    throw new Error("Method not implemented.");
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem("role") != null) {
      const role = this.encService.decrypt(sessionStorage.getItem("role"), "");
      if (role === "User") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
