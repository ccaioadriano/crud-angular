import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snack-bar-salved'],
    });
  }

  create(product: Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

}
