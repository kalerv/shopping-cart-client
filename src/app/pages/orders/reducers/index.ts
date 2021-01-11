import { createReducer, on } from "@ngrx/store";
import { Order } from "app/models/order.model";
import { OrderActions } from "../actions/orders-action.types";


export interface OrderState {
  orders: Order[]
}

const initialOrderState: OrderState = {
  orders: null
}

export const orderReducer = createReducer(
  initialOrderState,
  on(OrderActions.ordersLoaded, (state, action) => {
    return {
      orders: action.orders
    }
  }),
  on(OrderActions.cleanOrders, (state, action) => {
    return {
      orders: null
    }
  })
)
