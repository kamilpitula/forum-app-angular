import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../storage/local-storage.service';
import { AuthenticatedUser, AuthenticationResult, AuthenticationService, LoginData } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService implements AuthenticationService{

  constructor(private storage: LocalStorageService, private http: HttpClient) { }

  logIn(loginData: LoginData): Observable<AuthenticationResult> {
    return this.http
      .post<AuthenticationResult>(environment.baseUrl+'/api/Users/authenticate', {userName: loginData.login, password: loginData.password})
      .pipe(
        tap(r => console.log(r)),
        tap(r => this.saveData(r))
      );
  }
  
  logOut(): Observable<void> {
    return of(this.storage.removeItem('token'), this.storage.removeItem('user'))
  }

  isAuthenticated(): Observable<boolean> {
    return of(this.storage.getValue('token') != null)
  }

  private saveData(authenticationResult: AuthenticationResult): void {
    this.storage.setItem('token', authenticationResult.token)
    
    const authenticatedUser : AuthenticatedUser = {
      userName: authenticationResult.userName,
      userId: authenticationResult.id,
      email: authenticationResult.email
    };

    this.storage.setItem('user', JSON.stringify(authenticatedUser));
  }
}
