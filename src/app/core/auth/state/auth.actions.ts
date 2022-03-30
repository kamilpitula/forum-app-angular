import {createAction, props} from '@ngrx/store';
import { AuthenticatedUser } from '../services/authentication.service';

export const userLoggedIn = createAction(
    '[AUTH] UserLoggedIn',
    props<{user: AuthenticatedUser}>()
);

export const userLoggedOut = createAction(
    '[AUTH] UserLoggedOut'
);