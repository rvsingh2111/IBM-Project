import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "https://random-data-api.com/api/coffee/random_coffee?size=50"
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ReadonlyArray<Product>> {
    return this.http.get<ReadonlyArray<Product>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
