import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  unSubscribe$: Subject<void> = new Subject();
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    hints: new FormControl(false)
  })
  showHints: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit () {
  }
  onSubmit () {
    if (!this.loginForm.valid) return;
    console.log(this.loginForm.value)
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).pipe(takeUntil(this.unSubscribe$)).subscribe(s => console.log('sssss:', s))
  }
  ngOnDestroy () {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
