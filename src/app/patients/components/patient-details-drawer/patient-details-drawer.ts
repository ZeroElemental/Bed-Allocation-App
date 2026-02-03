import { Component } from '@angular/core';
import { Patient } from '../../services/patient';

@Component({
  selector: 'app-patient-details-drawer',
  imports: [],
  templateUrl: './patient-details-drawer.html',
  styleUrl: './patient-details-drawer.css',
})
export class PatientDetailsDrawer {
constructor(private patientService: Patient){}
}
