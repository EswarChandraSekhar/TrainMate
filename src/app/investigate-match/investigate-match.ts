import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgeDialog } from '../imge-dialog/imge-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatchService } from '../match-service';

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

  constructor(private route: ActivatedRoute, private router: Router, private matDialog: MatDialog,private matchService: MatchService
  ) {}
ngOnInit(): void {
 
  setTimeout(() => {
    const state = history.state;

    if (state && state.lostItem && state.foundItem) {
      this.lostItem = state.lostItem;
      this.foundItem = state.foundItem;

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
    this.matchService.confirmMatch(this.lostItem._id,this.foundItem._id).subscribe(
      res=>{
        this.router.navigate(['/admin-panel']);
      },
      err=>{
        alert('Something went wrong')
      }
    )
  }

  goBack(): void {
    this.router.navigate(['/admin-panel']);
  }

  onImage(imgUrl: string) {
    const image = new Image();
  image.src = imgUrl;

  image.onload = () => {
    let width = image.naturalWidth;
    let height = image.naturalHeight;

    // Cap to 800px max, maintaining aspect ratio
    if (width > 800 || height > 800) {
      const ratio = Math.min(800 / width, 800 / height);
      width = width * ratio;
      height = height * ratio;
    }

    this.matDialog.open(ImgeDialog, {
      data: {
        url: imgUrl,
        width,
        height
      },
      panelClass: 'image-dialog-panel',
      // remove fixed width and height to allow dynamic sizing
      autoFocus: false,
      maxWidth: 'none',
      maxHeight: 'none'
    });
  };
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
