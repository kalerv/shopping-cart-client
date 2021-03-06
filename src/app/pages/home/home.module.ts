import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { ProductService } from 'app/services/product.service';
import { ProductListComponent } from '@shared/product-list/product-list.component';
import { ProductComponent } from '@shared/product-list/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
