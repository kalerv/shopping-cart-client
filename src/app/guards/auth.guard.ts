import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { isLoggedIn } from "app/pages/auth/selectors/auth.selector";
import { AppState } from "app/reducers";
import { AuthService } from "app/services/auth.service";
import { Observable, of } from "rxjs";
import { map, take, tap } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(select(isLoggedIn), tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigateByUrl('/');
        }
      }));
  }
}
