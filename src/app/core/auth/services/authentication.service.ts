import { Observable } from "rxjs";

export interface AuthenticationService {
    logIn() : Observable<boolean>;
    logOut(): Observable<void>;
    isAuthenticated(): Observable<boolean>;
}