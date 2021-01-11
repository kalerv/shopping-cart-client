import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductActions } from '@shared/product-list/actions/products-actions-types';
import { Cart } from 'app/models/cart.interface';
import { User } from 'app/models/user.interface';
import { AuthActions } from 'app/pages/auth/actions/auth-actions.types';
import { isLoggedIn } from 'app/pages/auth/selectors/auth.selector';
import { CartActions } from 'app/pages/cart/actions/cart-action-types';
import { getCart } from 'app/pages/cart/selectors/cart.selectors';
import { OrderActions } from 'app/pages/orders/actions/orders-action.types';
import { AppState } from 'app/reducers';
import { AuthService } from 'app/services/auth.service';
import { CartService } from 'app/services/cart.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('toggleButton', { static: true }) toggleButton: ElementRef<HTMLButtonElement>;
  @ViewChild('navDiv', { static: false }) navDiv: ElementRef<HTMLDivElement>;
  cart$: Observable<Cart>;
  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit () {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn),
    )
    this.cart$ = this.store.pipe(select(getCart));
  }
  onLogout () {
    this.store.dispatch(AuthActions.logout());
    this.store.dispatch(CartActions.cleanCart());
    this.store.dispatch(ProductActions.cleanProducts());
    this.store.dispatch(OrderActions.cleanOrders())
    this.hideNav();
  }
  toggleNav () {
    const isExpanded = this.toggleButton.nativeElement.getAttribute('aria-expanded')
    if (isExpanded === 'false') {
      this.toggleButton.nativeElement.setAttribute('aria-expanded', 'true');
      this.navDiv.nativeElement.classList.add('show');
    } else {
      this.hideNav();
    }
  }
  hideNav () {
    this.toggleButton.nativeElement.setAttribute('aria-expanded', 'false');
    this.navDiv.nativeElement.classList.remove('show');
  }
}
