import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';
import { OrdersComponent } from './orders.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
