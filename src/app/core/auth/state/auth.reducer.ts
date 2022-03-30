import {createReducer, on} from '@ngrx/store';
import { AuthenticatedUser } from '../services/authentication.service';
import { userLoggedIn, userLoggedOut } from './auth.actions';

const initialState: AuthenticatedUser = {
    userId: 0,
    email: '',
    userName: ''
}; 

export const authReducer = createReducer(
    initialState,
    on(userLoggedIn, (state, {user}) => user),
    on(userLoggedOut, (state) => initialState)
);