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
import * as fromOrders from '../pages/orders/reducers';
export interface AppState {
  cart: fromCart.CartState,
  auth: fromAuth.AuthState,
  products: fromProducts.ProductsState,
  orders: fromOrders.OrderState
}

export const reducers: ActionReducerMap<AppState> = {
  'cart': fromCart.cartReducer,
  'auth': fromAuth.authReducer,
  'products': fromProducts.productsReducer,
  'orders': fromOrders.orderReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
