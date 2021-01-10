import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "../reducers";

export const selectProductState = createFeatureSelector<ProductsState>('products');

export const getAllProducts = createSelector(
  selectProductState,
  state => state.products
)

export const getExclusiveProducts = createSelector(
  getAllProducts,
  products => products.filter(p => p.exclusive)
)

