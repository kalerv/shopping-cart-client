import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'orders',
    pathMatch: 'full',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'products',
    pathMatch: 'full',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'cart',
    pathMatch: 'full',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
