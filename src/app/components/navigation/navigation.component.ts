import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Cart } from 'app/models/cart.interface';
import { CartService } from 'app/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  cart$: Observable<Cart>;
  constructor(private cartService: CartService) { }

  ngOnInit () {
    this.cart$ = this.cartService.cart$;
    const cart = this.cartService.cart$.subscribe(c => console.log('cart nav:', c));
  }

}
