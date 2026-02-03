import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { BedStatusBadge } from '../bed-status-badge/bed-status-badge';
import { BedPatientMiniCard } from '../bed-patient-mini-card/bed-patient-mini-card';
import { BedStore } from '../../../core/services/bed-store';

@Component({
  selector: 'app-bed-tile',
  imports: [CommonModule,BedStatusBadge,BedPatientMiniCard],
  templateUrl: './bed-tile.html',
  styleUrl: './bed-tile.css',
})
export class BedTile {
constructor(private dialog:MatDialog,
  private bedStore:BedStore){}
}
