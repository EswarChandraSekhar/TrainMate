import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgeDialog } from '../imge-dialog/imge-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-investigate-match',
  standalone: false,
  templateUrl: './investigate-match.html',
  styleUrl: './investigate-match.css'
})
export class InvestigateMatch implements OnInit {
  lostItem: any;
  foundItem: any;
  arr: any[] = [5, 15, 11, 13, 19, 55, 22]

  constructor(private route: ActivatedRoute, private router: Router, private matDialog: MatDialog) {}
ngOnInit(): void {
 
  setTimeout(() => {
    const state = history.state;

    if (state && state.lostItem && state.foundItem) {
      this.lostItem = state.lostItem;
      this.foundItem = state.foundItem;

      console.log('Lost Item:', this.lostItem);
      console.log('Found Item:', this.foundItem);

      console.log('Images array:', this.lostItem.images);
      console.log('Type of images:', typeof this.lostItem.images);

      // Handle stringified images array if needed
      if (typeof this.lostItem.images === 'string') {
        try {
          this.lostItem.images = JSON.parse(this.lostItem.images);
        } catch (e) {
          console.error('Error parsing images:', e);
          this.lostItem.images = [];
        }
      }

    } else {
      this.router.navigate(['/admin-panel']);
    }
  }, 0);
}



  confirmMatch(): void {
    alert('Match confirmed. Notifications will be sent.');
    this.router.navigate(['/admin-panel']);
  }

  goBack(): void {
    this.router.navigate(['/admin-panel']);
  }

   onImage(img: string){
    console.log(img)
   this.matDialog.open(ImgeDialog,{
      data: img,
      width: 'auto'
    });
}

findElement(arr:any[], element: any){
  console.log(arr)
  console.log(element)
  for (let i = 0; i<arr.length; i++){
    if (arr[i] === element){
      return true;
      
    }
  }
  return false;

    }
    

}
