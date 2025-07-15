import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-found-dialog',
  standalone: false,
  templateUrl: './edit-found-dialog.html',
  styleUrl: './edit-found-dialog.css'
})
export class EditFoundDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<EditFoundDialog>
  ){

  }
  
  handleClose(status: string = 'updated') {
  this.dialogRef.close(status);
}

}
