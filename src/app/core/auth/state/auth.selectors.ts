import { createFeatureSelector } from '@ngrx/store';
import { AuthenticatedUser } from '../services/authentication.service';
import { SignInState } from './auth.reducer';

export const selectAuthenticatedUser = createFeatureSelector<AuthenticatedUser>('authentication');
export const selectSignInResult = createFeatureSelector<SignInState>('signIn');
