import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './effects/cart.effects';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', fromCart.cartReducer),
    EffectsModule.forFeature([CartEffects])
  ]
})
export class CartModule { }
