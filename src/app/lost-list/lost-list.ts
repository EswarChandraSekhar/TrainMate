import { Component, OnInit } from '@angular/core';
import { LostService } from '../lost-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditLostDialog } from '../edit-lost-dialog/edit-lost-dialog';


@Component({
  selector: 'app-lost-list',
  standalone: false,
  templateUrl: './lost-list.html',
  styleUrls: ['./lost-list.css']  
})
export class LostList implements OnInit {
  
  lostReports: any[] = [];
  enableEdit: boolean = false;
  selectedlostitem: any = null;
  LostListLoader: boolean = true;

  constructor(private lostservice: LostService, private snackBar: MatSnackBar, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.loadLostItems();
  }

  loadLostItems(): void {
    this.LostListLoader = true;
    this.lostservice.getLostItemList().subscribe(
      (response) => {
        this.lostReports = response;
        this.LostListLoader = false;
      },
      (error) => {
        this.LostListLoader = false;
      }
    );
  }

   successNotification(value: string){
     this.snackBar.open(value,'close',{
          duration:5000,
          panelClass: ['snack-success'] 
        })
  }

  onDelete(lost: any) {
  this.lostservice.deleteLostItem(lost).subscribe(
    (response) => {
      this.successNotification('User ' + lost.fullnameofuser + ' Deleted Successfully!');
      this.lostReports = this.lostReports.filter(obj => {
        if (obj._id === lost._id) {
          return false;
        } else {
          return true;
        }
      });
    },
    (error) => {
    }
  );
}


onEdit(lost: any) {
  let dialogRef = this.matDialog.open(EditLostDialog, {
    data: lost,
    width: '100%',
    maxWidth: '600px',          
    panelClass: 'custom-dialog', 
    autoFocus: false
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'updated') {
      this.loadLostItems(); 
    }
  });
}


}



  

