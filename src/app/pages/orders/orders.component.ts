import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'app/models/order.model';
import { AppState } from 'app/reducers';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';
import { OrderActions } from './actions/orders-action.types';
import { getOrders } from './selectors/orders.selector';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>
  constructor(private auth: AuthService, private store: Store<AppState>) { }

  ngOnInit () {
    const userId: string = JSON.parse(localStorage.getItem('user')).id;
    this.orders$ = this.store.select(getOrders);
    this.store.dispatch(OrderActions.loadOrders({ userId }))
    // this.auth.logOut();
  }

}
