import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { selectAuthenticatedUser } from '../state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const url: string = state.url;

    return this.store
      .select(selectAuthenticatedUser)
      .pipe(
        switchMap(user => user.userId !== 0 ? of(true) : of(this.router.parseUrl('/signIn'))),
        catchError(() => of(this.router.parseUrl('/signIn')))
      );
  }
}
