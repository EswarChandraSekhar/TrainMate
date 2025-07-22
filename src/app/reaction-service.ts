import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {
   private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  
  submitReaction(reaction: any): Observable<any> {
    return this.http.post(this.apiUrl + '/api/reactions', reaction);
  }

  getAllReactions(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/reactions');
  }

  // Delete a reaction by _id
  deleteReaction(reaction: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/api/reactions/' + reaction._id);
  }
  // Approve a reaction
  approveReaction(reactionId: string): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/api/reactions/' + reactionId + '/approve', {});
}

 // Get only approved reactions
 getApprovedReactionsList(): Observable<any[]> {
   return this.http.get<any[]>(this.apiUrl + '/api/reactions/approved');
}

deleteApprovedReaction(reactionId: string): Observable<any> {
  return this.http.delete<any>(this.apiUrl + '/api/reactions/' + reactionId);
}






}

