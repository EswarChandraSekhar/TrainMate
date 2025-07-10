import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FoundService } from '../found-service';

@Component({
  selector: 'app-found-form',
  standalone: false,
  templateUrl: './found-form.html',
  styleUrl: './found-form.css'
})
export class FoundForm implements OnInit {

  foundReports: any[] = [];

  @Input() FoundData: any = null;
  @Output() FoundUpdated: any = new EventEmitter()

  fullname: string = '';
  mobile: any = '';
  email: string = '';
  trainNumber: any = '';
  trainName: string = '';
  coachnum: any = '';
  location: any = '';
  itemname: string = '';
  description: string = '';
  dateoffound: any = '';

  constructor(private foundservice: FoundService, private router: Router, public snackbar: MatSnackBar) {}

  ngOnInit(): void {
    if(this.FoundData !== null){
      this.fullname = this.FoundData.fullname;
      this.mobile = this.FoundData.mobile;
      this.email = this.FoundData.email;
      this.trainNumber = this.FoundData.trainNumber;
      this.trainName = this.FoundData.trainName;
      this.coachnum = this.FoundData.coachnum;
      this.location = this.FoundData.location;
      this.itemname = this.FoundData.itemname;
      this.description = this.FoundData.description;
      this.dateoffound = this.FoundData.dateoffound;
    }
  }

  handleSubmit() {
  if (
    this.fullname === '' || this.mobile === '' ||
    this.email === '' || this.trainNumber === '' ||
    this.trainName === '' || this.coachnum === '' ||
    this.location === '' || this.itemname === '' ||
    this.description === '' || this.dateoffound === '' 
  ) {
    alert('You must enter every field');
    return;
  }

  let found: any = {
    fullname: this.fullname,
    mobile: this.mobile,
    email: this.email,
    trainNumber: this.trainNumber,
    trainName: this.trainName,
    coachnum: this.coachnum,
    location: this.location,
    itemname: this.itemname,
    dateoffound: this.dateoffound,
    description: this.description
  };

  if (this.FoundData && this.FoundData._id) {
     found._id = this.FoundData._id;
    }

  

  if (this.FoundData === null) {
    this.foundservice.addFoundItem(found).subscribe(
      (response) => {
        this.router.navigate(['/found-list']);
      },
      (error) => {
        this.snackbar.open('Failed to add found item', 'Close', { duration: 3000 });
      }
    );
  } else {
    this.foundservice.updateFoundItem(found).subscribe(
      (response) => {
        this.FoundUpdated.emit('updated');
        this.snackbar.open('Found Item Updated Successfully!', 'success', {
          duration: 3000,
          panelClass: 'snack-success'
        });
      },
      (error) => {
        this.snackbar.open('Failed to update found item', 'Close', { duration: 3000 });
      }
    );
  }
}


}
