import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "app/models/order.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from '../../environments/environment';
@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders (userId: string): Observable<Order[]> {
    return this.http.get(`${environment.orders}/${userId}`).pipe(map(r => r['data']));
  }
}
