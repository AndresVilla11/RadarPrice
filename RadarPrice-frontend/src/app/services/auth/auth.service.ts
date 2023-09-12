import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public cookieService: CookieService) { }

  public isAuthenticated(): boolean {
    const token = this.cookieService.check('token');
    console.log(token);
    return token;
  }
}
