import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class App {
  activeTab: string = 'home';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleclick(path: string): void {
    this.router.navigate(['/' + path]);
    this.activeTab = path;
  }
}
