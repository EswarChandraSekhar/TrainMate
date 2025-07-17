import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service';
import {map,catchError,of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authservice: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      let token = this.authservice.gettoken()
      if(token === null){
        this.router.navigate(['login'], {
          queryParams: {returnUrl: state.url}
        })
        return false;
      }
      else{
        this.authservice.checkLogin().pipe(
          map((res:any)=>{
              return true;
          }),
          catchError(()=>{
            return of(this.router.createUrlTree(['/login'], {
              queryParams: { returnUrl: state.url }
            }))
          })
            
        )
        return true;
      }
  }
  
}
