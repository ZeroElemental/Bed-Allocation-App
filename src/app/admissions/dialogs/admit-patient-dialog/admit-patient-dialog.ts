import { Component } from '@angular/core';
import { Admission } from '../../services/admission';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admit-patient-dialog',
  imports: [],
  templateUrl: './admit-patient-dialog.html',
  styleUrl: './admit-patient-dialog.css',
})
export class AdmitPatientDialog {
constructor(private admissionService: Admission,
  private dialogRef: MatDialogRef<AdmitPatientDialog>
){}
}
