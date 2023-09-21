import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Products } from 'src/app/model/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
  }

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.baseUrl}` + '/product')
      .pipe(
        catchError(this.handleError)
      );
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
