import { Component } from '@angular/core';
import { ReactionService } from '../reaction-service';

@Component({
  selector: 'app-react-form',
  standalone: false,
  templateUrl: './react-form.html',
  styleUrl: './react-form.css'
})
export class ReactForm {

  firstName: string = '';
  title: string = '';
  description: string = '';
  itemType: 'found' | 'lost' | '' = '';

  constructor(private reactionService: ReactionService) {}

  submitForm() {
    if (!this.firstName || !this.title || !this.description || !this.itemType) {
      alert('Please fill all fields.');
      return;
    }

    const reaction = {
      firstName: this.firstName,
      title: this.title,
      description: this.description,
      itemType: this.itemType
    };

    this.reactionService.submitReaction(reaction).subscribe({
      next: (res) => {
        alert('Your review has been submitted for admin approval!');
        this.clearForm();
      },
      error: (err) => {
        alert('Error submitting. Please try again.');
        console.error(err);
      }
    });
  }

  clearForm() {
    this.firstName = '';
    this.title = '';
    this.description = '';
    this.itemType = '';
  }

}
