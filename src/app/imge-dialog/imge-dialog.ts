import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-imge-dialog',
  standalone: false,
  templateUrl: './imge-dialog.html',
  styleUrl: './imge-dialog.css'
})
export class ImgeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any)
   {}

}
