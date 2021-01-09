import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductListComponent } from '@shared/product-list/product-list.component';
import { ProductComponent } from '@shared/product-list/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'app/services/product.service';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
