import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AuthService} from "../../modules/auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private authService: AuthService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth-token');
    if(!token || req.headers.get('skip')) {
      return next.handle(req);
    }
    const reqToken = req.clone({
      headers: req.headers
        .set('Authorization', `Token ${token}`)
        // .set('Content-Type', 'application/json'),
    });

    return next.handle(reqToken).pipe(tap(() => {

    }, (error: any) => {
      if(error.status === 401 || error.status === 403) {
        localStorage.removeItem('auth-token');
        this.authService.logout();
      }
    }));
  }
}
