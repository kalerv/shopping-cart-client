import { createReducer, on } from "@ngrx/store";
import { Cart, CartItem } from "app/models/cart.interface";
import { CartActions } from "../actions/cart-action-types";

export interface CartState {
  cart: Cart
}
export const initialCartState: CartState = {
  cart: null
}
const _cartReducer = createReducer(
  initialCartState,
  on(CartActions.cartLoaded, (state, actions) => {
    return { cart: actions.cart }
  }),
  on(CartActions.addProductToCart, (state, action) => {
    let oldState: CartState = { ...state };
    if (oldState.cart) {
      let alreadyExitedIndex = 0;
      let alreadyExistedProduct = oldState.cart.cartItems && oldState.cart.cartItems.find((p: CartItem, index) => {
        if (p.product.id === action.product.id) {
          alreadyExitedIndex = index;
          return p;
        }
      });
      let product = action.product;
      if (!alreadyExistedProduct) {
        oldState.cart.cartItems = [...oldState.cart.cartItems, { product, quantity: 1, totalPrice: product.price }];
        oldState.cart.totalItems += 1;
        oldState.cart.totalPrice += product.price;
        oldState.cart.userId = action.userId
        return oldState;
      }
      // when product already exist in cart
      oldState.cart.totalPrice = oldState.cart.totalPrice + product.price;
      oldState.cart.totalItems = oldState.cart.totalItems + 1;
      alreadyExistedProduct.quantity = alreadyExistedProduct.quantity + 1;
      alreadyExistedProduct.totalPrice = alreadyExistedProduct.totalPrice + product.price;
      let cartItems = [...oldState.cart.cartItems];
      cartItems[alreadyExitedIndex] = alreadyExistedProduct;
      oldState.cart.cartItems = [...cartItems];
      return oldState;
    }
    let newState: CartState = {
      cart: {
        cartItems: [
          {
            product: action.product,
            quantity: 1,
            totalPrice: action.product.price
          }
        ],
        totalItems: 1,
        totalPrice: action.product.price,
        userId: action.userId
      }
    }
    return newState;

  }),
  on(CartActions.decreaseProductQuantity, (state, action) => {
    const oldState = { ...state };
    let productToUpdateIndex = 0;
    const productToUpdate = oldState.cart.cartItems.find((p, i) => {
      if (p.product.id === action.product.id) {
        productToUpdateIndex = i;
        return p;
      }
    });
    oldState.cart.totalItems -= 1;
    oldState.cart.totalPrice -= productToUpdate.product.price;
    oldState.cart.cartItems[productToUpdateIndex].quantity -= 1;
    oldState.cart.cartItems[productToUpdateIndex].totalPrice -= productToUpdate.product.price;
    return { ...oldState }
  }),
  on(CartActions.increaseProductQuantity, (state, action) => {
    const oldState = { ...state };
    let productToUpdateIndex = 0;
    const productToUpdate = oldState.cart.cartItems.find((p, i) => {
      if (p.product.id === action.product.id) {
        productToUpdateIndex = i;
        return p;
      }
    });
    oldState.cart.totalItems += 1;
    oldState.cart.totalPrice += productToUpdate.product.price;
    oldState.cart.cartItems[productToUpdateIndex].quantity += 1;
    oldState.cart.cartItems[productToUpdateIndex].totalPrice += productToUpdate.product.price;
    return { ...oldState }
  }),
  on(CartActions.deleteProductFromCart, (state, action) => {
    const oldState = { ...state };
    let productToUpdateIndex = 0;
    const productToUpdate = oldState.cart.cartItems.find((p, i) => {
      if (p.product.id === action.product.id) {
        productToUpdateIndex = i;
        return p;
      }
    });
    oldState.cart.totalItems -= productToUpdate.quantity;
    oldState.cart.totalPrice -= productToUpdate.totalPrice;
    oldState.cart.cartItems.splice(productToUpdateIndex, 1);
    return { ...oldState }
  }),
  on(CartActions.cartSaved, (state, action) => {
    return { ...state }
  }),
  on(CartActions.cleanCart, (state, action) => {
    return { cart: undefined }
  })
);

export function cartReducer (state, action) {
  return _cartReducer(state, action);
}
