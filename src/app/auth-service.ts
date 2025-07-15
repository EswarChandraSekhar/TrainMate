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

  constructor(private http: HttpClient) { }

  register(user:any):Observable<any>{
    return this.http.post(this.authUrl + '/register',  user).pipe(
      tap((res:any)=>{
        console.log("Register response:", res);
        this.settoken(res.token)
        this.loginStatus.next(true)
      }
     )
    )
  }

  login(user:any):Observable<any>{
    return this.http.post(this.authUrl + '/login', user).pipe(
      tap((res:any)=>{
        this.settoken(res.token)
        this.loginStatus.next(true)
      }
     )
    )
  }

  logOut(){
    this.loginStatus.next(false)
    localStorage.removeItem(this.authKey)
  }

  settoken(token:string){
    localStorage.setItem(this.authKey, token)
  }

  gettoken(): string | null{
    return localStorage.getItem(this.authKey)

  }

  checkLogin(){
    let token = this.gettoken()
    if(token){
      this.loginStatus.next(true)
    }
  }


}
