import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';
import { ProductResolver } from 'app/resolvers/product.resolver';
import { ProductsComponent } from './products.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    resolve: { products: ProductResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
