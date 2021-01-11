
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cart } from "app/models/cart.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {
  }

  getCart (userId): Observable<Cart> {
    return this.http.get<Cart>(`${environment.apiUrl}${environment.cart}/${userId}`).pipe(map(r => r['data']));
  }
  saveCart (cart: Cart): Observable<Cart> {
    return this.http.post(`${environment.apiUrl}${environment.cart}`, { ...cart }).pipe(
      map(r => r['data'])
    )
  }
  checkout (userId: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}${environment.checkout}`, { userId });
  }

}

