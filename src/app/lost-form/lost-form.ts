import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { LostService } from '../lost-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-lost-form',
  standalone: false,
  templateUrl: './lost-form.html',
  styleUrls: ['./lost-form.css']  
})
export class LostForm implements OnInit {

  @Input() LostData: any = null;
  @Output() LostUpdated: any = new EventEmitter()

  fullname: string = '';
  mobile: any = '';
  email: string = '';
  trainNumber: any = '';
  trainName: string = '';
  coachnum: any = '';
  seatnum: any = '';
  itemname: string = '';
  description: string = '';
  dateoflost: any = '';
  proof: any = '';

  lostreports: any[] = [];

  constructor(private lostservice: LostService, private router: Router, public snackbar: MatSnackBar) {}

  ngOnInit(): void {
    if(this.LostData !== null){
      this.fullname = this.LostData.fullnameofuser;
      this.mobile = this.LostData.mobile;
      this.email= this.LostData.email;
      this.trainNumber = this.LostData.trainNumber;
      this.trainName = this.LostData.trainName;
      this.coachnum = this.LostData.coachnum;
      this.seatnum = this.LostData.seatnum;
      this.itemname = this.LostData.itemname;
      this.description = this.LostData.description;
      this.dateoflost = this.LostData.dateoflost;
      this.proof = this.LostData.proof;
    }
  }

  /*ngOnInit(): void {
    this.lostservice.getLostItemList().subscribe(
      (response) => {
        this.lostreports = response;
        console.log("Loaded lost reports:", this.lostreports);
      },
      (error) => {
        console.error('Error loading lost reports:', error);
      }
    );
  }*/

  handleSubmit() {
    if (
      this.fullname === '' || this.mobile === '' ||
      this.email === '' || this.trainNumber === '' ||
      this.trainName === '' || this.coachnum === '' ||
      this.seatnum === '' || this.itemname === '' ||
      this.description === '' || this.dateoflost === '' ||
      this.proof === ''
    ) {
      alert('You must enter every field');
      return;
    }

    let lost:any = {
      fullnameofuser: this.fullname,
      mobile: this.mobile,
      email: this.email,
      trainNumber: this.trainNumber,
      trainName: this.trainName,
      coachnum: this.coachnum,
      seatnum: this.seatnum,
      itemname: this.itemname,
      dateoflost: this.dateoflost,
      description: this.description,
      proof: this.proof
    };

    if (this.LostData && this.LostData._id) {
     lost._id = this.LostData._id;
    }


    if(this.LostData === null){
      this.lostservice.addLostItem(lost).subscribe(
        (response)=>{
           console.log('Successfully added:', response);
          this.router.navigate(['/lost-list'])
        },
        (error)=>{
          console.error('Add failed:', error);

        }
      )   
    }
    else{

      this.lostservice.updateLostItem(lost).subscribe(
        (response)=>{
          this.LostUpdated.emit('updated')
          this.snackbar.open('Lost Item Updated Successfully!','success',{duration:3000,panelClass:"snack-success"})
        },
        (error)=>{

        }
      )
    }
   
  }
}
