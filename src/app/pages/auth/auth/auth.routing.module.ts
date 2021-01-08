import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../signup/signup.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', component: LoginComponent },
      { path: '/signup', component: SignUpComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
