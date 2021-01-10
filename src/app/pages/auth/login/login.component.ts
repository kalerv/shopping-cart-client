import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { AuthService } from 'app/services/auth.service';
import { noop, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { login } from '../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('jane@doe.com', [Validators.required, Validators.email]),
    password: new FormControl('Jane123', [Validators.required]),
    hints: new FormControl(false)
  })
  showHints: boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit () {
  }
  onSubmit () {
    console.log(this.loginForm.value)
    if (!this.loginForm.valid) return;
    const { email, password } = this.loginForm.value;
    this.store.dispatch(login({
      user: {
        email, password
      }
    }));
  }
}
