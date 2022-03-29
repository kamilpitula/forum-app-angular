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
    login: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSignIn() {
    this.authenticationService.logIn()
      .subscribe(() => this.handleSignInResult())
    console.warn(this.loginData.value);
  }

  handleSignInResult() {
    console.warn('handle sign in');
  }
}
