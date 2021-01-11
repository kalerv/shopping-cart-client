import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "../reducers";

const orderState = createFeatureSelector<OrderState>('orders');

export const getOrders = createSelector(
  orderState,
  state => state && state.orders
)
