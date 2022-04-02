import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthenticatedUser } from '../services/authentication.service';
import { unauthorizedUserRedirected, userAuthenticationFailed, userAuthenticationSucceeded, userLoggedIn, userLoggedOut } from './auth.actions';

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

export interface SignInState {
    authenticationSucceeded: boolean;
    redirectTo: string;
}

const signInInitialState: SignInState = {
    authenticationSucceeded: true,
    redirectTo: ''
};

export const signInFeature = createFeature({
    name: 'signIn',
    reducer: createReducer(
        signInInitialState,
        on(userAuthenticationSucceeded, (state) => ({ ...state, authenticationSucceeded: true })),
        on(userAuthenticationFailed, (state) => ({ ...state, authenticationSucceeded: false })),
        on(unauthorizedUserRedirected, (state, action) => ({ ...state, redirectTo: action.redirectedFrom })),
    )
});