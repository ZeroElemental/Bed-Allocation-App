import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuditFilter } from '../../components/audit-filter/audit-filter';
import { AuditTable } from '../../components/audit-table/audit-table';
import { Audit } from '../../services/audit';

@Component({
  selector: 'app-audit-log-page',
  imports: [CommonModule,AuditFilter,AuditTable],
  templateUrl: './audit-log-page.html',
  styleUrl: './audit-log-page.css',
})
export class AuditLogPage {
constructor(private auditService: Audit){}
}
