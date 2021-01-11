import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OrderService } from "app/services/orders.service";
import { map, switchMap, take, tap } from "rxjs/operators";
import { OrderActions } from "../actions/orders-action.types";

@Injectable()
export class OrdersEffects {

  loadOrders$ = createEffect(() => this.action$
    .pipe(
      ofType(OrderActions.loadOrders),
      switchMap(action => {
        return this.orderService.getOrders(action.userId).pipe(
          map(orders => OrderActions.ordersLoaded({ orders })), take(1)
        )
      })
    )
  )
  constructor(private action$: Actions, private orderService: OrderService) { }
}
