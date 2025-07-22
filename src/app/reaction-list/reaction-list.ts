import { Component, OnInit } from '@angular/core';
import { ReactionService } from '../reaction-service';
@Component({
  selector: 'app-reaction-list',
  standalone: false,
  templateUrl: './reaction-list.html',
  styleUrl: './reaction-list.css'
})
export class ReactionList implements OnInit {
  reactions: any[] = [];
  loading: boolean = true;

  constructor(private reactionService: ReactionService) {}

  ngOnInit(): void {
    this.loadReactions();
  }

  loadReactions(): void {
    this.reactionService.getAllReactions().subscribe({
      next: (data) => {
        this.reactions = data.filter((r: any) => r.status === 'pending'); // 👈 only pending ones
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
      // Optionally handle error
      console.error('Deletion failed', error);
    }
  );
}

onApprove(reaction: any) {
  this.reactionService.approveReaction(reaction._id).subscribe(
    (updated) => {
      this.reactions = this.reactions.filter((r: any) => r._id !== reaction._id);
    },
    (error) => {
      console.error('Approval failed', error);
    }
  );
}




  

}
