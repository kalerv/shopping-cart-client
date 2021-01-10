import { Component, OnInit } from '@angular/core';
import { Cart } from 'app/models/cart.interface';
import { User } from 'app/models/user.interface';
import { AuthService } from 'app/services/auth.service';
import { CartService } from 'app/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  cart$: Observable<Cart>;
  user$: Observable<User>;
  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit () {
    this.cart$ = this.cartService.cart$;
    const cart = this.cartService.cart$.subscribe(c => console.log('cart nav:', c));
    this.user$ = this.authService.user$;
    this.authService.user$.subscribe(u => console.log('user from nav:', u));
  }
  onLogout () {
    this.authService.logOut();
  }
}
