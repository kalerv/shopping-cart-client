import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ProductActions } from '@shared/product-list/actions/products-actions-types';
import { getExclusiveProducts } from '@shared/product-list/selectors/products.selector';
import { Product } from 'app/models/product.interface';
import { AppState } from 'app/reducers';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartActions } from '../cart/actions/cart-action-types';
import { getCart } from '../cart/selectors/cart.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;
  userId: string;
  constructor(private store: Store<AppState>, private router: Router) {
    this.userId = JSON.parse(localStorage.getItem('user')).id;
  }

  ngOnInit () {
    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(getExclusiveProducts);
    this.store.dispatch(CartActions.getCartByUser({ userId: this.userId }))
  }
  onAddToCart (product: Product) {
    this.store.dispatch(CartActions.addProductToCart({ product, userId: this.userId }));
  }
  onBuyNow (product: Product) {
    this.store.dispatch(CartActions.addProductToCart({ product, userId: this.userId }));
    this.router.navigateByUrl('/cart')
  }
}
