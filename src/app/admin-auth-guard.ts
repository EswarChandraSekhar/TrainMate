import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service';
import {map,catchError,of, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
   constructor(private router: Router, private authservice: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const token = this.authservice.gettoken();

    if (!token) {
      return of(
        this.router.createUrlTree(['/login'], {
          queryParams: { returnUrl: state.url }
        })
      );
    }

    return this.authservice.checkLogin().pipe(
      map((res: any) => {
        if (res.user?.role === 'admin') {
          return true;
        } else {
          return this.router.createUrlTree(['/unauthorized']);
        }
      }),
      catchError(() =>
        of(
          this.router.createUrlTree(['/login'], {
            queryParams: { returnUrl: state.url }
          })
        )
      )
    );
  }

}
