import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LostService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Correct method name
  getLostItemList(): Observable<any> {
    return this.http.get<any>(this.url + '/api/lost-items');
  }

  addLostItem(lost: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/lost-items', lost);
  }

   // Delete a lost item by _id
  deleteLostItem(lost: any): Observable<any> {
    return this.http.delete<any>(this.url + '/api/lost-items/' + lost._id);
  }
 
  updateLostItem(lost: FormData): Observable<any> {
    return this.http.post<any>(this.url+'/api/lost-items/update', lost);
  }




}
