import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatientRow } from '../patient-row/patient-row';

@Component({
  selector: 'app-patient-table',
  imports: [CommonModule,PatientRow],
  templateUrl: './patient-table.html',
  styleUrl: './patient-table.css',
})
export class PatientTable {

}
