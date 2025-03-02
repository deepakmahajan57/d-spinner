import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  selectedTab: number | null = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
