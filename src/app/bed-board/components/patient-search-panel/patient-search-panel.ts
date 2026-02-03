import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatientSearchResultItem } from '../patient-search-result-item/patient-search-result-item';

@Component({
  selector: 'app-patient-search-panel',
  imports: [CommonModule,PatientSearchResultItem],
  templateUrl: './patient-search-panel.html',
  styleUrl: './patient-search-panel.css',
})
export class PatientSearchPanel {

}
