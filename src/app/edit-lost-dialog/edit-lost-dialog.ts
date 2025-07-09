import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-edit-lost-dialog',
  standalone: false,
  templateUrl: './edit-lost-dialog.html',
  styleUrl: './edit-lost-dialog.css'
})
export class EditLostDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<EditLostDialog>
  ){

  }

  handleClose(status: string = 'closed') {
  this.dialogRef.close(status);
}



}
