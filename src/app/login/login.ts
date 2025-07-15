import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = ''
  password: string = ''
  constructor(private authservice: AuthService, private Matsnackbar: MatSnackBar, private router: Router,
    private route: ActivatedRoute
  ){}

  handleLogin(){
    if(this.email === '' ||
       this.password === ''){
      this.Matsnackbar.open("Incorrect email/passsword", "error", {duration: 5000})
    }
    
    let data = {
      email: this.email,
      password: this.password
    }

    this.authservice.login(data).subscribe(
      res=>{
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        if(returnUrl === null){
          this.router.navigate(['home'])
        }
        else{
          this.router.navigate([returnUrl])
        }
        this.Matsnackbar.open("Your Login Verified", 'Success' , {duration: 5000})
      }
    )

    
  }

}
