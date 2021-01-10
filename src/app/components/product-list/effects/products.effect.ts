import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "app/services/product.service";
import { map, mergeMap, take } from "rxjs/operators";
import { ProductActions } from "../actions/products-actions-types";


@Injectable()
export class ProductsEffect {
  $loadProduct = createEffect(() => this.actions$
    .pipe(
      ofType(ProductActions.loadProducts),
      mergeMap((action) => {
        return this.productsService.fetchAllProducts()
          .pipe(map((products) => ProductActions.productsLoaded({ products })
          ), take(1))
      }
      )
    ))

  constructor(private actions$: Actions, private productsService: ProductService) { }
}
