import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-investigate-match',
  standalone: false,
  templateUrl: './investigate-match.html',
  styleUrl: './investigate-match.css'
})
export class InvestigateMatch implements OnInit {
  lostItem: any;
  foundItem: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.lostItem && state.foundItem) {
      this.lostItem = state.lostItem;
      this.foundItem = state.foundItem;

      console.log('Lost Item:', this.lostItem);
      console.log('Found Item:', this.foundItem);
    } else {
      this.router.navigate(['/admin-panel']);
    }
  }

  confirmMatch(): void {
    alert('Match confirmed. Notifications will be sent.');
    this.router.navigate(['/admin-panel']);
  }

  goBack(): void {
    this.router.navigate(['/admin-panel']);
  }
}
