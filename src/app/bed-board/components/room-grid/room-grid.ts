import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BedTile } from '../bed-tile/bed-tile';

@Component({
  selector: 'app-room-grid',
  imports: [CommonModule,BedTile],
  templateUrl: './room-grid.html',
  styleUrl: './room-grid.css',
})
export class RoomGrid {
constructor(){}
}
