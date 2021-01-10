import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "app/models/user.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkUserLoggedIn();
  }
  login (email, password): Observable<User> {
    return this.http.post<User>(`${environment.login}`, { email, password }).pipe(map((u: User) => {
      this.performLogin(u['data']);
      return u['data'];
    }));
  }
  private performLogin (user) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['../']);
  }
  private checkUserLoggedIn (): void {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.userSubject.next(user);
      this.router.navigate(['../']);
    }
  }
  logOut (): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['./auth']);
  }
}
