import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "app/services/auth.service";
import { map, switchMap, take, tap } from "rxjs/operators";
import { AuthActions } from "../actions/auth-actions.types";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.login),
        switchMap(action => {
          return this.authService.login(action.user.email, action.user.password).pipe(
            tap(user => {
              if (user) {
                this.router.navigateByUrl('/home');
              }
            }),
            map(user => AuthActions.loginSuccess({ user }))
          )
        })
      ));

  loginSuccess$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.loginSuccess),
        tap(action => {
          localStorage.setItem('user', JSON.stringify(action.user));
        })
      ), { dispatch: false })

  logout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/');
        })
      ), { dispatch: false })

  constructor(private actions$: Actions, private router: Router, private authService: AuthService) { }
}
