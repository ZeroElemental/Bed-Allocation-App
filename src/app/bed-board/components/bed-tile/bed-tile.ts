import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BedStatusBadge } from '../bed-status-badge/bed-status-badge';
import { BedPatientMiniCard } from '../bed-patient-mini-card/bed-patient-mini-card';

@Component({
  selector: 'app-bed-tile',
  imports: [CommonModule,BedStatusBadge,BedPatientMiniCard],
  templateUrl: './bed-tile.html',
  styleUrl: './bed-tile.css',
})
export class BedTile {

}
