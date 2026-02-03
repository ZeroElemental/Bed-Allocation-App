import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatientFilter } from '../../components/patient-filter/patient-filter';
import { PatientTable } from '../../components/patient-table/patient-table';
import { Patient } from '../../services/patient';

@Component({
  selector: 'app-patient-list-page',
  imports: [CommonModule,PatientFilter,PatientTable],
  templateUrl: './patient-list-page.html',
  styleUrl: './patient-list-page.css',
})
export class PatientListPage {
constructor(private patientService: Patient){}
}
