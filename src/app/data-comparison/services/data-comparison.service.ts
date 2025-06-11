import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataEntity } from '../interfaces/data-entity';
//import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataComparisonService {
  private apiUrl = '';

  constructor(/*private http: HttpClient*/) { }
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
          entityName: 'Jobseeker Education',
          erpRecordCount: 2100,
          crmRecordCount: 2095,
          status: false
        },
        {
          id: '1-2',
          entityName: ' Military Approval',
          erpRecordCount: 1800,
          crmRecordCount: 1800,
          status: true
        },
        {
          id: '1-3',
          entityName: 'Jobseeker Attachment',
          erpRecordCount: 2400,
          crmRecordCount: 2400,
          status: true
        },
        {
          id: '1-4',
          entityName: 'Jobseeker Disability',
          erpRecordCount: 1300,
          crmRecordCount: 1280,
          status: false
        },
        {
          id: '1-5',
          entityName: ' Cource Enrollment',
          erpRecordCount: 1740,
          crmRecordCount: 1735,
          status: false
        },
        {
          id: '1-6',
          entityName: ' Interview Feedback',
          erpRecordCount: 1700,
          crmRecordCount: 1710,
          status: false
        },
         {
          id: '1-7',
          entityName: ' Languages',
          erpRecordCount: 1500,
          crmRecordCount: 1500,
          status: true
        },
         {
          id: '1-8',
          entityName: '  Work Experience',
          erpRecordCount: 1700,
          crmRecordCount: 1715,
          status: false
        },
         {
          id: '1-9',
          entityName: ' Job Application',
          erpRecordCount: 1220,
          crmRecordCount: 1220,
          status: true
        },
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
          entityName: '  New Job Request',
          erpRecordCount: 1700,
          crmRecordCount: 1700,
          status: true
        },
         {
          id: '2-3',
          entityName: ' Sponsor Type',
          erpRecordCount: 1700,
          crmRecordCount: 1700,
          status: true
        },
         {
          id: '2-4',
          entityName: ' Human Resource Employees',
          erpRecordCount: 1100,
          crmRecordCount: 1140,
          status: false
        },
         {
          id: '2-5',
          entityName: 'Notifications',
          erpRecordCount: 700,
          crmRecordCount: 700,
          status: true
        },
        {
          id: '2-6',
          entityName: 'Job Postings',
          erpRecordCount: 880,
          crmRecordCount:880,
          status: true
        },
        
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
          entityName: 'Electronic CV Education',
          erpRecordCount: 12500,
          crmRecordCount: 12480,
          status: false
        },
        {
          id: '3-2',
          entityName: 'Handicap Type',
          erpRecordCount: 3200,
          crmRecordCount: 3195,
          status: false
        }
      ],
      isExpanded: false
    },
    
  ];


  // // Get all entities
  // getEntities(): Observable<DataEntity[]> {
  //   return  this.http.get<DataEntity[]>(`${this.apiUrl}/all`) ;
  // }

 getEntities(): Observable<DataEntity[]> {
    return of(this.staticData)
  }

}