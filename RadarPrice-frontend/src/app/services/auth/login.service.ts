import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserLoginRequest } from 'src/app/model/UserLoginRequest';
import { UserLoginResponse } from 'src/app/model/UserLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: UserLoginRequest): Observable<UserLoginResponse> {
    return this.httpClient.post<UserLoginResponse>('', '').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error en el login service', error.error);
    } else {
      console.error('Error retornado por el back', error.status, error.error);
    }
    return throwError(() => new Error('Algo fallo en el login service'));
  }
}
