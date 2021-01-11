import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from 'app/models/cart.interface';
import { Product } from 'app/models/product.interface';
import { User } from 'app/models/user.interface';
import { AppState } from 'app/reducers';
import { Observable } from 'rxjs';
import { CartActions } from './actions/cart-action-types';
import { getCart } from './selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isCheckoutPerformed = false;
  cart$: Observable<Cart>;
  userId: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit () {
    this.userId = JSON.parse(localStorage.getItem('user')).id;
    this.cart$ = this.store.select(getCart);
  }
  onIncreaseQuantity (product: Product) {
    this.store.dispatch(CartActions.increaseProductQuantity({ product }))
  }

  onDecreaseQuantity (product: Product) {
    this.store.dispatch(CartActions.decreaseProductQuantity({ product }))
  }

  onDeleteItem (product: Product) {
    this.store.dispatch(CartActions.deleteProductFromCart({ product }))
  }
  onCheckOut () {
    this.store.dispatch(CartActions.checkout({ userId: this.userId }));
    this.isCheckoutPerformed = true;
  }
}
