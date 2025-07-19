import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // ✅ Added ChangeDetectorRef
import { MatchService } from '../match-service';
import { LostService } from '../lost-service';
import { FoundService } from '../found-service';
import * as Highcharts from 'highcharts';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminPanel implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  // Loading state
  isLoading = true;

  // Data arrays
  matches: any[] = [];

  // Count variables for cards
  lostCount = 0;
  foundCount = 0;
  smartMatchCount = 0;
  completedMatchCount = 0;
  rejectedMatchCount = 0;

  // Chart options
  chartOptions: Highcharts.Options = {};

  constructor(
    private matchService: MatchService,
    private lostService: LostService,
    private foundService: FoundService,
    private cdr: ChangeDetectorRef // ✅ Injected ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log ('🟡 AdminPanel initialized');
    this.loadDashboardData();
  }

  async loadDashboardData(): Promise<void> {
    console.log('🔄 Loading dashboard data...');
    this.isLoading = true;

    try {
      const [lostItems, foundItems, matchResponse] = await Promise.all([
        lastValueFrom(this.lostService.getLostItemList()),
        lastValueFrom(this.foundService.getFoundItemList()),
        lastValueFrom(this.matchService.getMatchList())
      ]);

      console.log('📦 Lost Items:', lostItems);
      console.log('🔍 Found Items:', foundItems);
      console.log('🔗 Match Response:', matchResponse);

      this.lostCount = lostItems.length;
      this.foundCount = foundItems.length;

      this.matches = matchResponse.matches || [];

      this.smartMatchCount = this.matches.length;
      this.completedMatchCount = this.matches.filter(m => m.status === 'completed').length;
      this.rejectedMatchCount = this.matches.filter(m => m.status === 'rejected').length;

      console.log('✅ Count Summary:', {
        lostCount: this.lostCount,
        foundCount: this.foundCount,
        smartMatchCount: this.smartMatchCount,
        completedMatchCount: this.completedMatchCount,
        rejectedMatchCount: this.rejectedMatchCount
      });

      this.updateChart();
    } catch (error) {
      console.error('❌ Error loading dashboard data:', error);
    } finally {
      this.isLoading = false;
      console.log('✅ Dashboard loading complete');
    }
  }

  updateChart(): void {
    console.log('📊 Updating Highcharts with current counts...');
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Lost & Found Summary'
      },
      xAxis: {
        categories: ['Lost', 'Found', 'Smart Matches', 'Completed', 'Rejected'],
        title: {
          text: 'Report Types'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Reports'
        }
      },
      plotOptions: {
        column: {
          colorByPoint: true
        }
      },
      series: [{
        name: 'Reports',
        type: 'column',
        data: [
          { y: this.lostCount, color: '#6c757d' },
          { y: this.foundCount, color: '#0d6efd' },
          { y: this.smartMatchCount, color: '#0dcaf0' },
          { y: this.completedMatchCount, color: '#198754' },
          { y: this.rejectedMatchCount, color: '#dc3545' }
        ]
      }]
    };

    this.cdr.detectChanges(); // ✅ Force Angular to update the view
    console.log('✅ Chart data set.');
  }

  getConfidencePercent(confidence: string): string {
    switch (confidence) {
      case 'High': return '92%';
      case 'Medium+': return '80%';
      default: return '65%';
    }
  }
}
