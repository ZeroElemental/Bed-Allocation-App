import { Component } from '@angular/core';
import { Admission } from '../../services/admission';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-discharge-confirm-dialog',
  imports: [],
  templateUrl: './discharge-confirm-dialog.html',
  styleUrl: './discharge-confirm-dialog.css',
})
export class DischargeConfirmDialog {
constructor(private admissionService: Admission,private dialogRef:MatDialogRef<DischargeConfirmDialog>){}
}
