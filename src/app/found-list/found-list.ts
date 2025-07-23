import { Component, OnInit } from '@angular/core';
import { FoundService } from '../found-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditFoundDialog } from '../edit-found-dialog/edit-found-dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found-list',
  standalone: false,
  templateUrl: './found-list.html',
  styleUrl: './found-list.css'
})
export class FoundList implements OnInit {

  foundReports: any[] = [];
  enableEdit: boolean = false;
  foundListLoader: boolean = true;

  searchInput: string = '';
 trainNumberFilter: string = '';
 trainNameFilter: string = '';
 dateFilter: string = '';


  constructor(private foundservice: FoundService, private snackBar: MatSnackBar, private matDialog: MatDialog, private router: Router) {}
  goToAdminPanel(): void {
    this.router.navigate(['/admin-panel']);
  }

  ngOnInit(): void {
    this.loadfounditems();
  }

  loadfounditems():void{
    this.foundListLoader = true;
    this.foundservice.getFoundItemList().subscribe(
      (Response)=>{
        console.log('FOUND RESPONSE:', Response);
        this.foundReports = Response;
        this.foundListLoader = false;
      },
      (error)=>{
        this.foundListLoader = false;
      }
    )
  }
  successNotification(value: string){
     this.snackBar.open(value,'close',{
          duration:5000,
          panelClass: ['snack-success'] 
        })
  }

  onDelete(found: any) {
  this.foundservice.deleteFoundItem(found).subscribe(
    (response) => {
      this.successNotification('User ' + found.fullname + ' Deleted Successfully!');
      this.foundReports = this.foundReports.filter(obj => {
        if (obj._id === found._id) {
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

onEdit(found: any) {
  let dialogRef = this.matDialog.open(EditFoundDialog, {
    data: found,
    width: '100%',
    maxWidth: '600px',          
    panelClass: 'custom-dialog', 
    autoFocus: false
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result === 'updated') {
      this.loadfounditems(); 
    }
  });

  
 


}


}
