import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatientSearchPanel } from '../../components/patient-search-panel/patient-search-panel';
import { WardTabs } from '../../components/ward-tabs/ward-tabs';
import { ActivitySidebar } from '../../components/activity-sidebar/activity-sidebar';
import { BedLegend } from '../../components/bed-legend/bed-legend';
import { BedStore } from '../../../core/services/bed-store';
import { Patient } from '../../../patients/services/patient';
import { Audit } from '../../../audit/services/audit';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-bed-board-page',
  imports: [CommonModule,PatientSearchPanel,WardTabs,ActivitySidebar,BedLegend],
  templateUrl: './bed-board-page.html',
  styleUrl: './bed-board-page.css',
})
export class BedBoardPage implements OnInit   {
  constructor(
    private bedStore: BedStore,
    private patientService: Patient,
    private auditService: Audit
  ){}
  ngOnInit(): void {
      this.bedStore.init();
  }
}
