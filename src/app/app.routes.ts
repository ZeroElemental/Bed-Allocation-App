import { Routes } from '@angular/router';
import { BedBoardPage } from './bed-board/pages/bed-board-page/bed-board-page';
import { PatientListPage } from './patients/pages/patient-list-page/patient-list-page';
import { AuditLogPage } from './audit/pages/audit-log-page/audit-log-page';
import { Login } from './auth/pages/login/login';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
         component:Login
    },
    {
        path: 'bed-board',
        component:BedBoardPage,
        canActivate: [AuthGuard]
    },
    {
        path: 'patients', 
        component:PatientListPage,
        canActivate: [AuthGuard]
    },
    {
        path: 'audit', 
        component:AuditLogPage,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'bed-board',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'bed-board'
    }
    
];
