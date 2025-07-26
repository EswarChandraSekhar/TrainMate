import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMatchList(): Observable<any> {
    return this.http.get<any>(this.url + '/api/matches/generate');
  }
  getMatchOverview(): Observable<any>{
    return this.http.get<any>(this.url + "/api/matches/overview")
  }
  confirmMatch(lostId:any,foundId: any):Observable<any>{
    return this.http.post<any>(this.url+"/api/matches/confirm-match",{lostId,foundId})
  }

  
}
