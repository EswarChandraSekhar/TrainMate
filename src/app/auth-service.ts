import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { NonNullAssert } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl: string = 'http://localhost:3000/api/auth'
  authKey: string = 'auth_token'

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(false)
  loginstatus$:Observable<boolean> = this.loginStatus.asObservable()

  loggedInUserData: BehaviorSubject<any> = new BehaviorSubject(null)
  loggedInUserData$:Observable<any> = this.loggedInUserData.asObservable()

  constructor(private http: HttpClient) { }

  register(user:any):Observable<any>{
    return this.http.post(this.authUrl + '/register',  user).pipe(
      tap((res:any)=>{
        console.log("Register response:", res);
        this.settoken(res.token)
        this.loginStatus.next(true)
        this.loggedInUserData.next({
          username: res.username,
          email: res.email,
          role: res.role
          })
      }
     )
    )
  }

  login(user:any):Observable<any>{
    return this.http.post(this.authUrl + '/login', user).pipe(
      tap((res:any)=>{
        this.settoken(res.token)
        this.loginStatus.next(true)
        this.loggedInUserData.next({
          username: res.username,
          email: res.email,
          role: res.role
        })
      }
     )
    )
  }

  logOut(){
    this.loginStatus.next(false)
    this.loggedInUserData.next(null)
    localStorage.removeItem(this.authKey)
  }

  settoken(token:string){
    localStorage.setItem(this.authKey, token)
  }

  gettoken(): string | null{
    return localStorage.getItem(this.authKey)

  }

  checkLogin(){
    return this.http.post(this.authUrl + '/verify-token', {}).pipe(
      tap((res:any)=>{
        this.loginStatus.next(true)
        this.loggedInUserData.next(res.user)
      })
    )


}

}
