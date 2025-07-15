import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: any = '';

  constructor(private authservice: AuthService, private snackbar: MatSnackBar){}
  
   handleSubmit() {
    if (
      this.firstName === '' ||
      this.lastName === '' ||
      this.email === '' ||
      this.password === '' ||
      this.phoneNumber === ''
    ) {
      alert('All fields are required');
      return;
    }

    let user = {
      firstName:  this.firstName,  
      lastName:  this.lastName,  
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber
    };

    this.authservice.register(user).subscribe(
      res=>{
        this.snackbar.open("User registered Successfully", 'success', {duration:5000})
      }
    )

}





}
