import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'http://localhost:3000/api/user/profile';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    const email = localStorage.getItem('userEmail');
    const params = new HttpParams().set('email', email || '');
    return this.http.get<any>(this.apiUrl, { params });
  }
}
