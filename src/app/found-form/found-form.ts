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

  selectedFiles: any = []
  previewFiles: any = []

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

  let found: FormData = new FormData();

  // Required fields
  found.append("fullname", this.fullname);
  found.append("mobile", this.mobile);
  found.append("email", this.email);
  found.append("trainNumber", this.trainNumber);
  found.append("trainName", this.trainName);
  found.append("coachnum", this.coachnum);
  found.append("location", this.location);
  found.append("itemname", this.itemname);
  found.append("dateoffound", this.dateoffound);
  found.append("description", this.description);    

  // Optional image files (append only if available)
  if (this.selectedFiles && this.selectedFiles.length > 0) {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      found.append('images', this.selectedFiles[i]);
    }
  }

  
  if (this.FoundData === null) {
    this.foundservice.addFoundItem(found).subscribe(
      (response) => {
        this.router.navigate(['/found-form-submission']);
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


fileChanged(event: any){
    let files = event.target.files;
    this.selectedFiles = files;
    for(let i=0;i<files.length;i++){
       let reader = new FileReader()
       reader.readAsDataURL(files[i])
       reader.onload = (value)=>{
          this.previewFiles.push(value.target?.result)
       }
    }
  }


removeImage(index: number): void {
  this.previewFiles.splice(index, 1);
  this.selectedFiles.splice(index, 1);
}  


}
