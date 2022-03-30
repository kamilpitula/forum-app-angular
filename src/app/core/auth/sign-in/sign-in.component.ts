import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtAuthenticationService } from '../services/jwt-authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authenticationService: JwtAuthenticationService) { }

  loginData = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSignIn() {
    this.authenticationService
      .logIn({
        login: this.loginData.get('login')?.value,
        password: this.loginData.get('password')?.value
      })
      .subscribe(r => this.handleSignInResult(r));
  }

  handleSignInResult(result: boolean) {
    if (result) {
      console.warn('authentication succeeded');
    }
    else {
      console.warn('authentication failed');
    }
  }
}
