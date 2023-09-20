import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { Products } from 'src/app/model/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
  }

  addProductToUser(addProduct: Products) {
    return this.httpClient.post(`${this.baseUrl}` + '/product', addProduct)
      .pipe(
        tap(() => {

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
}
