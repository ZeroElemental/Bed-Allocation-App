import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuditRow } from '../audit-row/audit-row';

@Component({
  selector: 'app-audit-table',
  imports: [CommonModule,AuditRow],
  templateUrl: './audit-table.html',
  styleUrl: './audit-table.css',
})
export class AuditTable {

}
