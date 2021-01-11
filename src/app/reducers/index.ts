import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCart from '../pages/cart/reducers';
import * as fromAuth from '../pages/auth/reducers';
import * as fromProducts from '../components/product-list/reducers';
export interface AppState {
  cart: fromCart.CartState,
  auth: fromAuth.AuthState,
  products: fromProducts.ProductsState
}

export const reducers: ActionReducerMap<AppState> = {
  'cart': fromCart.cartReducer,
  'auth': fromAuth.authReducer,
  'products': fromProducts.productsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
