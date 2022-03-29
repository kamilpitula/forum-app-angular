import { Observable } from "rxjs";

export interface AuthenticationService {
    logIn(loginData: LoginData): Observable<AuthenticationResult>;
    logOut(): Observable<void>;
    isAuthenticated(): Observable<boolean>;
}

export interface LoginData {
    login: string;
    password: string;
}

export interface AuthenticationResult {
    id: number;
    userName: string;
    email: string;
    token: string;
}

export interface AuthenticatedUser {
    userId: number;
    email: string;
    userName: string;
}