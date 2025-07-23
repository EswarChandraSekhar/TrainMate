import { Component, OnInit } from '@angular/core';
import { ReactionService } from '../reaction-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reaction-list',
  standalone: false,
  templateUrl: './reaction-list.html',
  styleUrl: './reaction-list.css'
})
export class ReactionList implements OnInit {
  reactions: any[] = [];
  loading: boolean = true;

  constructor(private reactionService: ReactionService, private router: Router) {}
  ngOnInit(): void {
    this.loadReactions();
  }
  loadReactions(): void {
    this.reactionService.getAllReactions().subscribe({
      next: (data) => {
        this.reactions = data.filter((res: any) => res.status === 'pending'); 
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching reactions:', err);
         this.loading = false;
      }
    });
  }
  onDeleteReaction(reaction: any) {
  this.reactionService.deleteReaction(reaction).subscribe(
    (response) => {
      this.reactions = this.reactions.filter(obj => obj._id !== reaction._id);
    },
    (error) => {
      console.error('Deletion failed', error);
    }
  );
}
onApprove(reaction: any) {
  this.reactionService.approveReaction(reaction._id).subscribe(
    (updated) => {
      this.reactions = this.reactions.filter((res: any) => res._id !== reaction._id);
    },
    (error) => {
      console.error('Approval failed', error);
    }
  );
}
goToAdminPanel(): void {
    this.router.navigate(['/admin-panel']);
  }




  

}
