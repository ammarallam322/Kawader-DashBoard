import { Injectable } from '@angular/core';

import {Lookup , MainEntity,ChildDetail , SubChildEntity} from '../interfaces/heirarchy-entities'
@Injectable({
  providedIn: 'root'
})
export class HierarchyService {
  private lookups: Lookup[] = [
  
  { id :'1',
    name :'Location'
  },
   { id :'2',
    name :'Nationality'
  },
   { id :'3',
    name :'Specialization'
  },
   { id :'4',
    name :'Education Levels'
  },
  
  
  ];
  private mainEntities: MainEntity[] = [
  
  { id :'1',
    name :'Job Seeker'
  },
   { id :'2',
    name :'Employer'
  },
   { id :'3',
    name :'Jobs'
  },
 
  ];
  private childEntities: ChildDetail[] = [
  
  { id :'1',
    name :'Job Application'
  },
   { id :'2',
    name :'Jobseeker Education'
  },
   { id :'3',
    name :'Jobseeker Experience'
  },
   { id :'4',
    name :'HR Entity'
  },
  
  
  ];
  private subChildEntities: SubChildEntity[] = [
  
  { id :'1',
    name :'Interview'
  },
   { id :'2',
    name :'Hiring Process'
  },
  
  
  ];
  getLookups(): Lookup[] {
    return this.lookups;
  }
    getMainEntities(): MainEntity[] {
    return this.mainEntities;
  }  getChilds(): ChildDetail[] {
    return this.childEntities;
  }  getSubChilds(): SubChildEntity[] {
    return this.subChildEntities;
  }  
}