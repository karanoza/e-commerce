import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { LoginService } from "../../login.service";

@Injectable({
  providedIn: "root",
})
export class CustomInterceptorService {
  constructor(private loginService: LoginService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req.clone({});

    if (sessionStorage.getItem("token") != null) {
      const header = new HttpHeaders().set(
        "x-access-token",
        sessionStorage.getItem("token")
      );
      request = req.clone({ headers: header });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          sessionStorage.clear();
          this.loginService.isLoggedIn(false);
          this.loginService.userRole("");
          this.router.navigate(["/login"]);
        }
        return throwError(error);
      })
    );
  }
}
