import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductActions } from '@shared/product-list/actions/products-actions-types';
import { filter, map, take, tap } from 'rxjs/operators';
import { PageTitles } from './models/pages-titles';
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
  titlesObj = PageTitles;
  constructor(private store: Store<AppState>, private titleService: Title, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)).
      subscribe(val => {
        let url = (val['url'] === '/' ? '/login' : val['url']).substr(1);
        this.titleService.setTitle(this.titlesObj[url]);
      }, take(1));
  }
  ngOnInit () {
    const userProfile = localStorage.getItem('user');
    if (userProfile) {
      const user: User = JSON.parse(userProfile);
      this.store.dispatch(AuthActions.loginSuccess({ user }));
      this.store.dispatch(ProductActions.loadProducts());
      this.loadCart(user.id)
    }
  }

  private loadCart (userId) {
    setTimeout(() => this.store.dispatch(CartActions.getCartByUser({ userId })), 1000)
  }
}
