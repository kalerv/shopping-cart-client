import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cart, CartItem } from "app/models/cart.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable()
export class CartService {
  private cartSubject$ = new BehaviorSubject<Cart>({
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    user: null
  });
  cart$: Observable<Cart> = this.cartSubject$.asObservable();

  constructor() {
  }

  addProductToCart ({ user, product, quantity }) {
    let cart: Cart;
    this.cart$.subscribe(c => {
      cart = {
        cartItems: [...c.cartItems, product],
        totalPrice: c.totalPrice + (product.price * quantity),
        user, totalItems: c.cartItems.length + 1
      }
    });
    this.cartSubject$.next(cart);
    console.log('cart obs:', this.cart$)
  }
}
