import { Component } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  user: any = null;
    lostItems: any[] = [];
    foundItems: any[] = [];
    loading: boolean = true;
    error: string = '';
    viewMode: 'lost' | 'found' = 'lost';
  
    constructor(private userProfileService: UserProfileService) {}
  
   ngOnInit(): void {
  this.loadUserProfileData();
}

loadUserProfileData(): void {
  this.loading = true;

  this.userProfileService.getUserData().subscribe(
    (response) => {
      this.user = response.user;
      this.lostItems = response.lostItems;
      this.foundItems = response.foundItems;
      this.loading = false;
    },
    (error) => {
      this.error = 'Failed to load user profile data.';
      this.loading = false;
    }
  );
}


}
