export interface DataEntity {
  id: string;
  entityName: string;
  erpRecordCount: number;
  crmRecordCount: number;
  status: boolean;
  children?: DataEntity[];
  isExpanded?: boolean;
}