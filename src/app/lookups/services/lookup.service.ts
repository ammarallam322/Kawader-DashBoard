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
      locupName: 'Nationality',
    newSystem:['GUID' , 'column (EN)' , 'column (AR)'],
     mappingStrategy:' ERP (text & code) >>> mapping through text '
    },

     {
      id: 2,
      locupName: 'Profile',
      newSystem:[' choice (public,private ,both)'],
     mappingStrategy:'manually depends on condition on drived column',
    },
     {
      id: 3,
      locupName: 'Language',
    newSystem:['GUID' , 'column (EN)' , 'column (AR)'],
     mappingStrategy:' ERP (text & code) >>> mapping through text',
    },

     {
      id: 4,
      locupName: 'Gender',
      newSystem:[' 0 , 1'],
     mappingStrategy:'ERP (0,1) >>> 0,1',
    },
     {
      id: 5,
      locupName: 'Education Level',
      newSystem:[' education level'],
     mappingStrategy:'manually using derived coumn depends on EDUCATION LEVEL from ERP',
     }
    
    //   id: 6,
    //   locupName: 'Location',
    //   newSystem:[' 0 , 1'],
    //  mappingStrategy:'ERP (0,1) >>> 0,1',
    // },
     // },
    //  {
    //   id: 7,
    //   locupName: 'Specialization',
    //   newSystem:['education level'],
    //  mappingStrategy:'ERP (0,1) >>> 0,1',
    // }
  ];
  constructor() { }


    getEntities(): Observable<LookupEntity[]> {
    return of(this.entities);
  }
}
