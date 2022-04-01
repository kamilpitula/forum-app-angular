import {createAction, props} from '@ngrx/store';
import { AuthenticatedUser, LoginData } from '../services/authentication.service';

export const userLoggedIn = createAction(
    '[AUTH] UserLoggedIn',
    props<{user: AuthenticatedUser}>()
);

export const userLoggedOut = createAction(
    '[AUTH] UserLoggedOut'
);

export const userRequestedSignIn = createAction(
    '[AUTH] User requested sign in',
    props<{loginData: LoginData}> ()
);

export const userAuthenticationFailed = createAction(
    '[AUTH] User authentication failed'
);

export const userAuthenticationSucceeded = createAction(
    '[AUTH] User authentication succeeded'
);