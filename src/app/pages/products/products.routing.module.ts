import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';
import { ProductsComponent } from './products.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
