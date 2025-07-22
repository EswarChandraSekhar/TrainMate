import { Component } from '@angular/core';
import { ReactionService } from '../reaction-service';
import { AuthService } from '../auth-service';


@Component({
  selector: 'app-reactions',
  standalone: false,
  templateUrl: './reactions.html',
  styleUrl: './reactions.css'
})
export class Reactions {
  approvedReactions: any[] = [];
    isAdmin = false;


  constructor(private reactionService: ReactionService, private authservice: AuthService) {}

  ngOnInit(): void {
     this.authservice.loggedInUserData$.subscribe(user => {
    this.isAdmin = user?.role === 'admin';
  });
    this.loadApprovedReactions();
  }

  loadApprovedReactions(): void {
  this.reactionService.getApprovedReactionsList().subscribe({
    next: (res) => {
      console.log("Received approved reactions:", res); // 👈 check this
      this.approvedReactions = res;
    },
    error: (err) => {
      console.error('Failed to load approved reactions:', err);
    }
  });
}

deleteApprovedReaction(reactionId: string) {
  const confirmDelete = confirm('Are you sure you want to delete this reaction?');
  if (!confirmDelete) return;

  this.reactionService.deleteApprovedReaction(reactionId).subscribe({
    next: () => {
      this.approvedReactions = this.approvedReactions.filter(r => r._id !== reactionId);
    },
    error: err => {
      console.error('Delete failed', err);
      alert('Delete failed');
    }
  });
}


getColor(type: string | undefined): string {
  if (!type) return 'gray'; // default/fallback color

  switch (type.toLowerCase()) {
    case 'lost':
      return 'red';
    case 'found':
      return 'green';
    default:
      return 'gray';
  }
}

}
