export interface Lookup {
  name: string;
  mainEntities: MainEntity[];
}

export interface MainEntity {
  name: string;
  childDetails: ChildDetail[];
}

export interface ChildDetail {
  name: string;
  subChildEntities: SubChildEntity[];
}

export interface SubChildEntity {
  name: string;
}