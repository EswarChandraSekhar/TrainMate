import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor(private Router: Router){}

  ngOnInit(): void {}

  activeTab: string = 'home';
  
  handleclick(path:any){
      this.Router.navigate(['/'+ path])
      this.activeTab = path;
    }
}
