import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Product } from "app/models/product.interface";
import { ProductService } from "app/services/product.service";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ProductResolver implements Resolve<Product[]> {

  constructor(private productService: ProductService) { }
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const products = this.productService.getProducts();
    if (products.length === 0) {
      return this.productService.fetchAllProducts();
    } else {
      return of(products);
    }
  }
}
