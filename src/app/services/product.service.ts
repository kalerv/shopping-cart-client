import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'
import { Product } from '../models/product.interface';
import { environment } from '../../environments/environment';
@Injectable()
export class ProductService {
  private products: Product[] = [];
  private productsChanged = new Subject<Product[]>();
  constructor(private http: HttpClient) { }
  fetchAllProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.products}`).pipe(
      map(p => {
        this.productsChanged.next(p['data']);
        this.products = p['data'].slice();
        return p['data'];
      })
    );
  }

  getProducts () {
    return this.products.slice();
  }

  getExclusiveProducts () {
    return this.products.slice().filter(p => p.exclusive);
  }
  getAllExclusiveProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.products}`).pipe(map(prod => prod['data'].filter(p => p.exclusive)));
  }
}
