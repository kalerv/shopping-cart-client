import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './models/user.interface';
import { AuthActions } from './pages/auth/actions/auth-actions.types';
import { CartActions } from './pages/cart/actions/cart-action-types';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  ngOnInit () {
    const userProfile = localStorage.getItem('user');
    if (userProfile) {
      const user: User = JSON.parse(userProfile);
      this.store.dispatch(AuthActions.loginSuccess({ user }));
      // this.loadCart(user.id)
    }
  }

  // private loadCart (userId) {
  //   this.store.dispatch(CartActions.getCartByUser({ userId }))
  // }
}
