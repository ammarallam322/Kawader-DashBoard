import { Injectable } from '@angular/core';

import {Lookup , MainEntity,ChildDetail , SubChildEntity} from '../interfaces/heirarchy-entities'
@Injectable({
  providedIn: 'root'
})
export class HierarchyService {
  private hierarchy: Lookup[] = [
    {
      name: 'Location',
      mainEntities: [
        {
          name: 'Employer',
          childDetails: [
            { name: 'HR Entity', subChildEntities: [{ name: 'Interview' }, { name: 'Hiring Process' }] }
          ]
        },
        {
          name: 'Jobseeker',
          childDetails: [
            { name: 'Jobseeker Education', subChildEntities: [{ name: 'Interview' }] },
            { name: 'Jobseeker Experience', subChildEntities: [{ name: 'Interview' }] },
            { name: 'Job Application', subChildEntities: [{ name: 'Interview' }, { name: 'Hiring Process' }] }
          ]
        },
        {
          name: 'Jobs',
          childDetails: [
            { name: 'Job Application', subChildEntities: [{ name: 'Interview' }, { name: 'Hiring Process' }] }
          ]
        }
      ]
    },
    {
      name: 'Education Level',
      mainEntities: [
        {
          name: 'Jobseeker',
          childDetails: [
            { name: 'Jobseeker Education', subChildEntities: [{ name: 'Interview' }] }
          ]
        }
      ]
    },
    {
      name: 'Specialization',
      mainEntities: [
        {
          name: 'Jobseeker',
          childDetails: [
            { name: 'Jobseeker Education', subChildEntities: [{ name: 'Interview' }] },
            { name: 'Jobseeker Experience', subChildEntities: [{ name: 'Interview' }] }
          ]
        },
        {
          name: 'Jobs',
          childDetails: [
            { name: 'Job Application', subChildEntities: [{ name: 'Interview' }, { name: 'Hiring Process' }] }
          ]
        }
      ]
    }
  ];

  getHierarchy(): Lookup[] {
    return this.hierarchy;
  }
}