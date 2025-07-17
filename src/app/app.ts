import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class App {

  loginStatus: boolean = false;
  loggedInUserData: any = null;

  activeTab: string = 'home';

  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit(): void {
    this.authservice.checkLogin().subscribe(res=>{

    })
    this.authservice.loginstatus$.subscribe(res=>{
      this.loginStatus = res;  

    })
    this.authservice.loggedInUserData$.subscribe(res=>{
      this.loggedInUserData = res;
    })
    
    // Active route set-up
    let currentUrl = location.href;

    if (currentUrl.includes('lost-form')){
      this.activeTab = 'lost-form'
    }
    else if(currentUrl.includes('found-form')){
      this.activeTab = 'found-form'
    }
    else if (currentUrl.includes('lost-list')){
      this.activeTab = 'lost-list'
    }
    else if (currentUrl.includes('found-list')){
      this.activeTab = 'found-list'
    }
    else if (currentUrl.includes('about-us')){
      this.activeTab = 'about-us'
    }
    else if (currentUrl.includes('reactions')){
      this.activeTab = 'reactions'
    }
    else if (currentUrl.includes('login')){
      this.activeTab = 'login'
    }
    }

  handleLogout(){
      this.authservice.logOut()
      this.router.navigate(['home'])
    }
  
  handleclick(path: string): void {
    this.router.navigate(['/' + path]);
    this.activeTab = path;
  }
}
