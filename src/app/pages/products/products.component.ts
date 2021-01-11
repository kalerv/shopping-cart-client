import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAllProducts } from '@shared/product-list/selectors/products.selector';
import { Product } from 'app/models/product.interface';
import { User } from 'app/models/user.interface';
import { AppState } from 'app/reducers';
import { Observable, Subject } from 'rxjs';
import { CartActions } from '../cart/actions/cart-action-types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  unSubscribe$ = new Subject<void>();
  products$: Observable<Product[]>;
  user: User;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit () {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.products$ = this.store.select(getAllProducts);
  }
  onAddToCart (event) {
    this.store.dispatch(CartActions.addProductToCart({ product: event, userId: this.user.id }));
  }

  onBuyNow (event) {
    this.store.dispatch(CartActions.addProductToCart({ product: event, userId: this.user.id }));
    this.router.navigateByUrl('/cart');
  }
}
