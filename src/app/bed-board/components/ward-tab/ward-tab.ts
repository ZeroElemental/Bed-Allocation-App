import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RoomGrid } from '../room-grid/room-grid';

@Component({
  selector: 'app-ward-tab',
  imports: [CommonModule,RoomGrid],
  templateUrl: './ward-tab.html',
  styleUrl: './ward-tab.css',
})
export class WardTab {

}
