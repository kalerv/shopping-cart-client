import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Cart } from 'app/models/cart.interface';
import { User } from 'app/models/user.interface';
import { AuthActions } from 'app/pages/auth/actions/auth-actions.types';
import { isLoggedIn } from 'app/pages/auth/selectors/auth.selector';
import { getCart } from 'app/pages/cart/selectors/cart.selectors';
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
  constructor(private store: Store<AppState>) { }

  ngOnInit () {
    this.cart$ = this.store.select(getCart);
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn),
    )
  }
  onLogout () {
    this.store.dispatch(AuthActions.logout());

  }
}
