import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Product } from '../models/product.interface';
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
  getAllProducts (): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
  }
  getAllExclusiveProducts (): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json').pipe(map(prod => prod.filter(p => p.exclusive)));
  }
}
