import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { userRequestedSignIn } from '../state/auth.actions';
import { selectSignInResult } from '../state/auth.selectors';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  public lastAttemptFailed!: boolean;

  constructor(private store: Store) { }

  loginData = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.store.select(selectSignInResult)
      .subscribe(result => this.lastAttemptFailed = !result);
  }

  onSignIn() {
    this.store.dispatch(userRequestedSignIn({
      loginData: { login: this.loginData.get('login')?.value, password: this.loginData.get('password')?.value }
    }))
  }
}
