import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "app/services/auth.service";
import { map, mergeMap, take, tap } from "rxjs/operators";
import { AuthActions } from "../actions/auth-actions.types";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.login),
        mergeMap(action => {
          return this.authService.login(action.user.email, action.user.password).pipe(
            map(user => AuthActions.loginSuccess({ user }))
          )

        }), take(1)
      ));

  loginSuccess$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.loginSuccess),
        tap(action => {
          console.log(action.type)
          localStorage.setItem('user', JSON.stringify(action.user));
          this.router.navigateByUrl('/home');
        })
      ), { dispatch: false })

  logout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.logout),
        tap(action => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/');
        })
      ), { dispatch: false })

  constructor(private actions$: Actions, private router: Router, private authService: AuthService) {



  }
}
