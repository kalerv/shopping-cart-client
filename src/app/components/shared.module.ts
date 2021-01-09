import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '@shared/product-list/product-list.component';
import { ProductComponent } from '@shared/product-list/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'app/services/product.service';
import { CartService } from 'app/services/cart.service';

const COMPONENTS = [ProductListComponent, ProductComponent];


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductService, CartService],
  exports: COMPONENTS
})
export class SharedModule { }
