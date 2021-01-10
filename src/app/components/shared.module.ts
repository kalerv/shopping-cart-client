import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '@shared/product-list/product-list.component';
import { ProductComponent } from '@shared/product-list/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'app/services/product.service';
import { CartService } from 'app/services/cart.service';
import { AuthService } from 'app/services/auth.service';
import { AuthGuard } from 'app/guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './product-list/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from './product-list/effects/products.effect';

const COMPONENTS = [ProductListComponent, ProductComponent];


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('products', fromProducts.productsReducer),
    EffectsModule.forFeature([ProductsEffect])
  ],
  providers: [ProductService, CartService, AuthService, AuthGuard],
  exports: COMPONENTS
})
export class SharedModule { }
