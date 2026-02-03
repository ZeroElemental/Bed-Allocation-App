import { Component } from '@angular/core';
import { Admission } from '../../services/admission';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-patient-dialog',
  imports: [],
  templateUrl: './transfer-patient-dialog.html',
  styleUrl: './transfer-patient-dialog.css',
})
export class TransferPatientDialog {
constructor(private admissionService:Admission, private dialogRef: MatDialogRef<TransferPatientDialog>){}
}
