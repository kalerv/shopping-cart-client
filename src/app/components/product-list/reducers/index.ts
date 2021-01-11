import { ActionReducerMap, ActionReducer, createFeatureSelector, createSelector, createReducer, on } from "@ngrx/store";
import { Product } from "app/models/product.interface";
import { ProductActions } from "../actions/products-actions-types";

export interface ProductsState {
  products: Product[]
}
export const initialProductsState: ProductsState = {
  products: []
}
const _productsReducer = createReducer(
  initialProductsState,
  on(ProductActions.productsLoaded, (state, action) => {
    return { products: action.products }
  }),
  on(ProductActions.cleanProducts, (state, action) => {
    return { products: null }
  })
)

export function productsReducer (state, action) {
  return _productsReducer(state, action);
}

