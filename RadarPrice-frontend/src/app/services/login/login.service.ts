import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, BehaviorSubject, tap, map } from 'rxjs';
import { UserLoginRequest } from 'src/app/model/UserLoginRequest';
import { AuthenticationRs } from 'src/app/model/AuthenticationRs';
import { UserRegister } from 'src/app/model/UserRegister';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string;

  currentUserData: BehaviorSubject<AuthenticationRs> = new BehaviorSubject<AuthenticationRs>({ token: '' });

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.baseUrl = 'http://localhost:8080/auth';
  }

  
  login(credentials: UserLoginRequest): Observable<AuthenticationRs> {
    return this.httpClient.post<AuthenticationRs>(`${this.baseUrl}/login`, credentials)
      .pipe(
        tap((userData: AuthenticationRs) => {
          this.cookieService.set('token', userData.token);
          this.currentUserData.next(userData);
        }),
        catchError(this.handleError)
      );
  }

  signUp(credentials: UserRegister): Observable<AuthenticationRs> {
    console.log(credentials);
    return this.httpClient.post<AuthenticationRs>(`${this.baseUrl}/register`, credentials)
      .pipe(
        tap((userData: AuthenticationRs) => {
          this.cookieService.set('token', userData.token);
          this.currentUserData.next(userData);
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    return this.httpClient.post(`${this.baseUrl}/logout`,'')
    .pipe(
      tap(() => {
        this.cookieService.deleteAll()
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error en el login service ', error.error);
    } else {
      console.error('Error retornado por el back ', error.status, error.error);
    }
    return throwError(() => new Error('Algo fallo en el login service'));
  }

  get userData(): Observable<AuthenticationRs> {
    return this.currentUserData.asObservable();
  }

  get getToken() {
    return localStorage.getItem('token');
  }
}
