import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '@shared/product-list/product-list.component';
import { ProductComponent } from '@shared/product-list/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'app/services/product.service';
import { CartService } from 'app/services/cart.service';
import { AuthService } from 'app/services/auth.service';
import { AuthGuard } from 'app/guards/auth.guard';
import { ProductResolver } from 'app/resolvers/product.resolver';

const COMPONENTS = [ProductListComponent, ProductComponent];


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductService, CartService, AuthService, AuthGuard, ProductResolver],
  exports: COMPONENTS
})
export class SharedModule { }
