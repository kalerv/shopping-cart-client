import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';
import { CartComponent } from './cart.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CartComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
