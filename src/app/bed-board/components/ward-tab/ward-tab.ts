import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RoomGrid } from '../room-grid/room-grid';
import { BedStore } from '../../../core/services/bed-store';

@Component({
  selector: 'app-ward-tab',
  imports: [CommonModule,RoomGrid],
  templateUrl: './ward-tab.html',
  styleUrl: './ward-tab.css',
})
export class WardTab {
  constructor(private bedStore:BedStore){}
}
