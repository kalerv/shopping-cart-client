import { createAction, props } from "@ngrx/store";
import { Order } from "app/models/order.model";


export const loadOrders = createAction(
  "[Orders Page] Load Orders", props<{ userId: string }>()
)
export const ordersLoaded = createAction(
  "[Orders Page] Orders Loaded", props<{ orders: Order[] }>()
)

export const cleanOrders = createAction(
  "[Navigation] Remove Orders"
)
