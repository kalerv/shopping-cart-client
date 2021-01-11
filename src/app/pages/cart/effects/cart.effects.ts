import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Cart } from "app/models/cart.interface";
import { AppState } from "app/reducers";
import { CartService } from "app/services/cart.service";
import { map, switchMap, take, tap } from "rxjs/operators";
import { CartActions } from "../actions/cart-action-types";
import { getCart } from "../selectors/cart.selectors";

@Injectable()
export class CartEffects {
  loadCart$ = createEffect(() => this.action$
    .pipe(
      ofType(CartActions.getCartByUser),
      switchMap(action => {
        console.log('Cart Effect called!', action.type)
        return this.cartService.getCart(action.userId)
          .pipe(
            map(cart => CartActions.cartLoaded({ cart }))
          )
      })
    )
  )

  updateCart$ = createEffect(() => this.action$
    .pipe(
      ofType(
        CartActions.addProductToCart,
        CartActions.decreaseProductQuantity,
        CartActions.increaseProductQuantity,
        CartActions.deleteProductFromCart
      ),
      map((action) => {
        console.log('Effect Called:', action.type)
        let cart: Cart;
        this.store$.select(getCart).pipe(take(1)).subscribe((c => cart = c));
        return CartActions.updateCart({ cart })
      })
    )
  )

  saveCartToDB$ = createEffect(() => this.action$
    .pipe(
      ofType(CartActions.updateCart),
      switchMap(action => {
        console.log('I am called:')
        return this.cartService.saveCart(action.cart).pipe(
          map(c => CartActions.cartSaved({ cart: c }))
        );
      })
    )
  )

  checkout$ = createEffect(() => this.action$
    .pipe(
      ofType(CartActions.checkout),
      switchMap(action => {
        return this.cartService.checkout(action.userId).pipe(
          map(() => CartActions.cleanCart())
        )
      })
    )
  )
  constructor(private action$: Actions, private cartService: CartService, private store$: Store<AppState>) { }
}
