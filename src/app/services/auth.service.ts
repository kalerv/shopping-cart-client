import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { User } from "app/models/user.interface";
import { AuthActions } from "app/pages/auth/actions/auth-actions.types";
import { AppState } from "app/reducers";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router, private store: Store<AppState>) {
    this.checkUserLoggedIn();
  }
  login (email, password): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}${environment.login}`, { email, password }).pipe(map((u: User) => {
      this.performLogin(u['data']);
      return u['data'];
    }));
  }
  private performLogin (user) {
    this.userSubject.next(user);
    // localStorage.setItem('user', JSON.stringify(user));

  }
  private checkUserLoggedIn (): void {
    // let user = localStorage.getItem('user');
    // if (user) {
    //   user = JSON.parse(user)
    //   this.userSubject.next(user);
    //   this.store.dispatch(AuthActions.login(user))
    // }
  }
  logOut (): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['./auth']);
  }
}
