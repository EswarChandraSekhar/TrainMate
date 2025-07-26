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
  reactionsLoader: boolean = true;
  isAdmin: boolean | null = null;

  constructor(private reactionService: ReactionService, private authservice: AuthService) { }

  ngOnInit(): void {
    this.authservice.loggedInUserData$.subscribe(user => {
      this.isAdmin = user?.role === 'admin';
    });
    this.loadApprovedReactions();
  }

  loadApprovedReactions(): void {
    this.reactionsLoader = true;
    this.reactionService.getApprovedReactionsList().subscribe({
      next: (res) => {
        console.log("Received approved reactions:", res); // 👈 check this
        this.reactionsLoader = false;
        this.approvedReactions = res;
      },
      error: (err) => {
        console.error('Failed to load approved reactions:', err);
        this.reactionsLoader = false;
      }
    });
  }
  deleteApprovedReaction(reactionId: string) {
    const confirmDelete = confirm('Are you sure you want to delete this reaction?');
    if (!confirmDelete) return;
    this.reactionService.deleteApprovedReaction(reactionId).subscribe(
      res=>{
        this.approvedReactions = this.approvedReactions.filter(d=> d._id !== reactionId)
      },
      err=>{

      }
    );
  }
}
