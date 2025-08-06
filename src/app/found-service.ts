import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoundService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // GET all found items
  getFoundItemList(): Observable<any> {
    return this.http.get<any>(this.url + '/api/found-items');
  }

  // POST a new found item
  addFoundItem(found: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/found-items', found);
  }

  // DELETE a found item by _id
  deleteFoundItem(found: any): Observable<any> {
    return this.http.delete<any>(this.url + '/api/found-items/' + found._id);
  }

  // Post (update) a found item by _id
  updateFoundItem(found: FormData): Observable<any> {
    return this.http.post<any>(this.url + '/api/found-items/update', found);
  }
}
