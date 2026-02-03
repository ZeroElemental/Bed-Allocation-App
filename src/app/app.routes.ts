import { Routes } from '@angular/router';
import { BedBoardPage } from './bed-board/pages/bed-board-page/bed-board-page';
import { PatientListPage } from './patients/pages/patient-list-page/patient-list-page';
import { AuditLogPage } from './audit/pages/audit-log-page/audit-log-page';
import { Login } from './auth/pages/login/login';

export const routes: Routes = [
    {path: '',redirectTo: 'bed-board', pathMatch: 'full'},
    {path: 'bed-board', component:BedBoardPage},
    {path: 'patients', component:PatientListPage},
    {path: 'audit', component:AuditLogPage},
    {path: 'login', component:Login}
];
