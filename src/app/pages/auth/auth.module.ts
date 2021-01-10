import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './login/login.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers'
import { AuthService } from 'app/services/auth.service';
import { AuthGuard } from 'app/guards/auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [],
  exports: [LoginComponent]
})
export class AuthModule {
  static forRoot (): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard]
    }
  }
}
