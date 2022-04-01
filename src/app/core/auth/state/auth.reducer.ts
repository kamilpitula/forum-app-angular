import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthenticatedUser } from '../services/authentication.service';
import { userAuthenticationFailed, userAuthenticationSucceeded, userLoggedIn, userLoggedOut } from './auth.actions';

const initialState: AuthenticatedUser = {
    userId: 0,
    email: '',
    userName: ''
};

export const authReducer = createReducer(
    initialState,
    on(userLoggedIn, (state, { user }) => user),
    on(userLoggedOut, (state) => initialState)
);

const signInInitialState: boolean = true;

export const signInFeature = createFeature({
    name: 'signIn',
    reducer: createReducer(
        signInInitialState,
        on(userAuthenticationSucceeded, (state) => true),
        on(userAuthenticationFailed, (state) => false)
    )
});