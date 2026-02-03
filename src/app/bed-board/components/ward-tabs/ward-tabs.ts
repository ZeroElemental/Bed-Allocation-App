import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WardTab } from '../ward-tab/ward-tab';
import { BedStore } from '../../../core/services/bed-store';

@Component({
  selector: 'app-ward-tabs',
  imports: [CommonModule,WardTab],
  templateUrl: './ward-tabs.html',
  styleUrl: './ward-tabs.css',
})
export class WardTabs {
  constructor(private bedStore:BedStore){}
}
