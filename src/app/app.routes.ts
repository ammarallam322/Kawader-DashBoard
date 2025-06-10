import { Routes } from '@angular/router';

import { DataComparisonComponent } from '../app/data-comparison/componnents/data-comparison.component';
import {LookupsComponent} from '../app/lookups/components/lookups.component'


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DataComparisonComponent },
  { path: 'lookups', component: LookupsComponent },

  { path: '**', redirectTo: '/dashboard' } 
];
