import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders.routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromOrders from './reducers'
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './effects/orders.effects';
import { OrderService } from 'app/services/orders.service';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    StoreModule.forFeature('orders', fromOrders.orderReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
  providers: [OrderService]
})
export class OrdersModule { }
