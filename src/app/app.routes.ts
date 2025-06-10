import { Routes } from '@angular/router';

import { DataComparisonComponent } from '../app/data-comparison/componnents/data-comparison.component';



export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DataComparisonComponent },
  { path: '**', redirectTo: '/dashboard' } // Wildcard route for 404
];
