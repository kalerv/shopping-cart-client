import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../reducers";

export const cartState = createFeatureSelector<CartState>('cart');

export const getCart = createSelector(
  cartState,
  state => state && state.cart
)
