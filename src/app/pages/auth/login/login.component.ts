import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { AuthService } from 'app/services/auth.service';
import { noop, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { login } from '../actions/auth.actions';
import { isLoggedIn } from '../selectors/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription$ = new Subject<void>();
  loginForm = new FormGroup({
    email: new FormControl('jane@doe.com', [Validators.required, Validators.email]),
    password: new FormControl('Jane123', [Validators.required]),
    hints: new FormControl(false)
  })
  showHints: boolean;
  constructor(private store: Store<AppState>, private router: Router) {
    const isLoggedIn$ = this.store.select(isLoggedIn);
    isLoggedIn$.pipe(takeUntil(this.subscription$)).
      subscribe(isLogged => {
        if (isLogged) {
          this.router.navigateByUrl('/home');
        }
      })
  }

  ngOnInit () { }
  onSubmit () {
    if (!this.loginForm.valid) return;
    const { email, password } = this.loginForm.value;
    this.store.dispatch(login({
      user: {
        email, password
      }
    }));
  }
  ngOnDestroy () {
    this.subscription$.next();
    this.subscription$.complete();
  }
}
