import { Component} from '@angular/core'; // ✅ Added ChangeDetectorRef

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminPanel  {
  
  activeTab: string = 'smart-match'
  handleActiveTab(value: string){
    this.activeTab = value;
  }

  
}
