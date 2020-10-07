import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Product } from './product.model';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  // metodos http são async graças ao observe

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      timeout(10000),
      map((product) => product),
      catchError((exception) => this.errorHandler(exception))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      timeout(10000),
      map((product) => product),
      catchError((exception) => this.errorHandler(exception))
    );
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      timeout(10000),
      map((product) => product),
      catchError((exception) => this.errorHandler(exception))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      timeout(10000),
      map((product) => product),
      catchError((exception) => this.errorHandler(exception))
    );
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      timeout(10000),
      map((product) => product),
      catchError((exception) => this.errorHandler(exception))
    );
  }

  errorHandler(exception: any): Observable<any> {
    // TODO tratar o error
    console.log(exception);

    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
