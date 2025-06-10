import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

import {LookupEntity} from '../interfaces/lookups-entity'
@Injectable({
  providedIn: 'root'
})
export class LookupService {
  private entities: LookupEntity[] = [
    {
      id: 1,
      entityName: 'Employer HR Member',
      lookups: [
        { id: 1, name: 'Employer' },
        { id: 2, name: 'Business Required' },
           { id: 3, name: 'Department' },
      ]
    },

     {
      id: 2,
      entityName: 'Employer HR Member2',
      lookups: [
        { id: 1, name: 'Employer2' },
        { id: 2, name: 'Business Required2' },
           { id: 3, name: 'Department2' },
      ]
    }
  ];
  constructor() { }


    getEntities(): Observable<LookupEntity[]> {
    return of(this.entities);
  }
}
