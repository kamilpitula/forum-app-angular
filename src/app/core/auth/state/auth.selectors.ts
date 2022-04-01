import {createSelector, createFeatureSelector} from '@ngrx/store';
import { AuthenticatedUser } from '../services/authentication.service';

export const selectAuthenticatedUser = createFeatureSelector<AuthenticatedUser>('authentication');
export const selectSignInResult = createFeatureSelector<boolean>('signIn');
