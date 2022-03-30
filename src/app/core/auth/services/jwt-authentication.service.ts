import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../storage/local-storage.service';
import { AuthenticatedUser, AuthenticationResult, AuthenticationService, LoginData } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService implements AuthenticationService {

  constructor(private storage: LocalStorageService, private http: HttpClient) { }

  logIn(loginData: LoginData): Observable<boolean> {
    return this.http
      .post<AuthenticationResult>(environment.baseUrl + '/api/Users/authenticate', { userName: loginData.login, password: loginData.password })
      .pipe(
        tap(r => console.log(r)),
        switchMap(r => this.saveData(r)),
        catchError(this.handleHttpError),
      );
  }

  logOut(): Observable<void> {
    return of(this.storage.removeItem('token'), this.storage.removeItem('user'))
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

    this.storage.setItem('user', JSON.stringify(authenticatedUser));

    return of(true);
  }
}
