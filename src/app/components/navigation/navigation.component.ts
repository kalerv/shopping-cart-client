import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Cart } from 'app/models/cart.interface';
import { User } from 'app/models/user.interface';
import { AuthActions } from 'app/pages/auth/actions/auth-actions.types';
import { isLoggedIn } from 'app/pages/auth/selectors/auth.selector';
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
  cart$: Observable<Cart>;
  isLoggedIn$: Observable<boolean>;
  constructor(private cartService: CartService, private store: Store<AppState>) { }

  ngOnInit () {
    this.cart$ = this.cartService.cart$;
    const cart = this.cartService.cart$.subscribe(c => console.log('cart nav:', c));
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn),
    )
  }
  onLogout () {
    this.store.dispatch(AuthActions.logout());

  }
}
