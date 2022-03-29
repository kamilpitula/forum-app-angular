import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../storage/local-storage.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService implements AuthenticationService{

  constructor(private storage: LocalStorageService) { }
  
  logIn(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  logOut(): Observable<void> {
    throw new Error('Method not implemented.');
  }
  isAuthenticated(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

}
