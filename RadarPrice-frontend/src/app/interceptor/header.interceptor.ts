import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const auth = this.cookieService.check('token')
      ? ('Bearer ' + this.cookieService.get('token'))
      : '';
    if (!this.cookieService.check('token')) {
      const authReq = request.clone({
        withCredentials: true
      });
      return next.handle(authReq);
    } else {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', auth),
        withCredentials: true
      });
      return next.handle(authReq);
    }
  }
}
