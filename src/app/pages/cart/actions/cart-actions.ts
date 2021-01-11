import { createAction, props } from "@ngrx/store";
import { Cart } from "app/models/cart.interface";
import { Product } from "app/models/product.interface";


export const getCartByUser = createAction(
  "[Cart Page] Cart By User", props<{ userId: string }>()
)

export const cartLoaded = createAction(
  "[Cart Page] Cart Loaded", props<{ cart: Cart }>()
)

export const addProductToCart = createAction(
  "[Product Page] Add Product To Cart", props<{ product: Product, userId: string }>()
)

export const increaseProductQuantity = createAction(
  "[Cart Page] Increase Product Quantity]", props<{ product: Product }>()
)
export const decreaseProductQuantity = createAction(
  "[Cart Page] Decrease Product Quantity]", props<{ product: Product }>()
)
export const deleteProductFromCart = createAction(
  "[Cart Page] Delete Product From Cart]", props<{ product: Product }>()
)

export const updateCart = createAction(
  "[Cart Page] Update Cart", props<{ cart: Cart }>()
)

export const cartSaved = createAction(
  "[Cart Page] Cart Saved", props<{ cart: Cart }>()
)
export const checkout = createAction(
  "[Cart Page] Checkout", props<{ userId: string }>()
)
export const cleanCart = createAction(
  "[Cart Page] Clean Cart",
)
