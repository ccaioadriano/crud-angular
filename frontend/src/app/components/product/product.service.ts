import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessageSuccess(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snack-bar-salved'],
    });
  }

  showMessageError(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snack-bar-error'],
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  update(product:Product): Observable<Product>{

    const url = `${this.baseUrl}/${product.id}`;

    return this.http.put<Product>(url, product);
  }

  getProductById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Product>(url);
  }



  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
