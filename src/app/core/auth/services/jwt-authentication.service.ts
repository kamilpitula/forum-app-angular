import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../storage/local-storage.service';
import { AuthenticatedUser, AuthenticationResult, AuthenticationService, LoginData } from './authentication.service';
import { userLoggedIn, userLoggedOut } from '../state/auth.actions';
import { selectSignInResult } from '../state/auth.selectors';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService implements AuthenticationService {

  constructor(private storage: LocalStorageService, private http: HttpClient, private store: Store, private router: Router) { }

  logIn(loginData: LoginData): Observable<boolean> {
    return this.http
      .post<AuthenticationResult>(environment.baseUrl + '/api/Users/authenticate', { userName: loginData.login, password: loginData.password })
      .pipe(
        tap(r => console.log(r)),
        switchMap(r => this.saveData(r)),
        tap(() => this.store.select(selectSignInResult).subscribe(x => this.router.navigate([x.redirectTo]))),
        catchError(this.handleHttpError),
      );
  }

  logOut(): Observable<void> {
    return of(this.storage.removeItem('token'), this.storage.removeItem('user'))
      .pipe(tap(_ => this.store.dispatch(userLoggedOut())))
  }

  isAuthenticated(): Observable<boolean> {
    return of(this.storage.getValue('token') != null)
  }

  private handleHttpError(error: HttpErrorResponse): Observable<boolean> {
    if (error.status == 0) {
      console.log('An error occured: ', error.error);
    }
    if (error.status == 401) {
      console.log('Validation failed.');
      return of(false);
    }

    return throwError(() => new Error('Unhandled exception!'));
  }

  private saveData(authenticationResult: AuthenticationResult): Observable<boolean> {

    this.storage.setItem('token', authenticationResult.token)

    const authenticatedUser: AuthenticatedUser = {
      userName: authenticationResult.userName,
      userId: authenticationResult.id,
      email: authenticationResult.email
    };

    this.store.dispatch(userLoggedIn({ user: authenticatedUser }));

    return of(true);
  }
}