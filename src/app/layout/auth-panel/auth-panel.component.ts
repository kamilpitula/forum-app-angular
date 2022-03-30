import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticatedUser } from 'src/app/core/auth/services/authentication.service';
import { JwtAuthenticationService } from 'src/app/core/auth/services/jwt-authentication.service';
import { selectAuthenticatedUser } from 'src/app/core/auth/state/auth.selectors';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.css']
})
export class AuthPanelComponent implements OnInit {

  user!: AuthenticatedUser | null;

  constructor(private store: Store, private authenticationService: JwtAuthenticationService) { }

  ngOnInit(): void {
    this.store
      .select(selectAuthenticatedUser)
      .subscribe(user => user.userId === 0 ? this.user = null : this.user = user);
  }

  onSignOut(): void {
    this.authenticationService
      .logOut()
      .subscribe();
  }
}
