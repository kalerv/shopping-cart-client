import { createAction, props } from "@ngrx/store";
import { Product } from "app/models/product.interface";

export const loadProducts = createAction(
  "[Products Page] Load Products"
);

export const productsLoaded = createAction(
  "[Products Page] Products Loaded", props<{ products: Product[] }>()
)
