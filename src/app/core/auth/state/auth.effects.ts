import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { JwtAuthenticationService } from '../services/jwt-authentication.service';
import { userAuthenticationFailed, userAuthenticationSucceeded, userRequestedSignIn } from './auth.actions';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authenticationService: JwtAuthenticationService) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(userRequestedSignIn),
        exhaustMap(action => this.authenticationService.logIn(action.loginData)
            .pipe(
                map(result => result ? userAuthenticationSucceeded() : userAuthenticationFailed()),
            )
        )
    ));
}