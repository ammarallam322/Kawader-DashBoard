import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataEntity } from '../interfaces/data-entity';

@Injectable({
  providedIn: 'root'
})
export class DataComparisonService {

  // Static data 
  private staticData: DataEntity[] = [
    {
      id: '1',
      entityName: 'Jobseeker',
      erpRecordCount: 1250,
      crmRecordCount: 1250,
      status: true,
      children: [
        {
          id: '1-1',
          entityName: 'Jobseeker edu',
          erpRecordCount: 2100,
          crmRecordCount: 2095,
          status: false
        },
        {
          id: '1-2',
          entityName: 'Jobseeker military',
          erpRecordCount: 1800,
          crmRecordCount: 1800,
          status: true
        }
      ],
      isExpanded: false
    },
    {
      id: '2',
      entityName: 'employers',
      erpRecordCount: 850,
      crmRecordCount: 845,
      status: false,
      children: [
        {
          id: '2-1',
          entityName: 'employers Categories',
          erpRecordCount: 25,
          crmRecordCount: 25,
          status: true
        },
        {
          id: '2-2',
          entityName: 'Product sub2',
          erpRecordCount: 1200,
          crmRecordCount: 1180,
          status: false
        }
      ],
      isExpanded: false
    },
    {
      id: '3',
      entityName: 'Electronic CV',
      erpRecordCount: 3200,
      crmRecordCount: 3200,
      status: true,
      children: [
        {
          id: '3-1',
          entityName: 'Electronic CV Items',
          erpRecordCount: 12500,
          crmRecordCount: 12480,
          status: false
        },
        {
          id: '3-2',
          entityName: 'Electronic CV sub2',
          erpRecordCount: 3200,
          crmRecordCount: 3195,
          status: false
        }
      ],
      isExpanded: false
    },
    {
      id: '4',
      entityName: 'Enitity',
      erpRecordCount: 125,
      crmRecordCount: 125,
      status: true,
      isExpanded: false
    },
    {
      id: '5',
      entityName: 'Entity2',
      erpRecordCount: 2850,
      crmRecordCount: 2850,
      status: true,
      children: [
        {
          id: '5-1',
          entityName: 'Entity3 Items',
          erpRecordCount: 8900,
          crmRecordCount: 8875,
          status: false
        }
      ],
      isExpanded: false
    }
  ];

  constructor() { }

  // Get all entities
  getEntities(): Observable<DataEntity[]> {
    return of(this.staticData);
  }

 
}