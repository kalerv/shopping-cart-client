import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth/auth.routing.module';



@NgModule({
  declarations: [LoginComponent, SignUpComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
