import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivityItem } from '../activity-item/activity-item';
import { Audit } from '../../../audit/services/audit';

@Component({
  selector: 'app-activity-sidebar',
  imports: [CommonModule,ActivityItem],
  templateUrl: './activity-sidebar.html',
  styleUrl: './activity-sidebar.css',
})
export class ActivitySidebar {
constructor(private auditService: Audit){}
}
