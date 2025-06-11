// hierarchy-component.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lookup, MainEntity, ChildDetail, SubChildEntity } from '../interfaces/heirarchy-entities';
import { HierarchyService } from '../servuces/heirarch.services';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-hierarchy',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './hierarchy-component.component.html',
  styleUrls: ['./hierarchy-component.component.css']
})
export class HierarchyComponent implements OnInit {
  lookups: Lookup[] = [];
  mainEntities: MainEntity[] = [];
  childEntities: ChildDetail[] = [];
  subChildEntities: SubChildEntity[] = [];

  isLookupsExpanded: boolean = false;
  isMainEntitiesExpanded: boolean = false;
  isChildEntitiesExpanded: boolean = false;
  isSubChildEntitiesExpanded: boolean = false;

  constructor(private hierarchyService: HierarchyService) {}

  ngOnInit(): void {
    this.lookups = this.hierarchyService.getLookups();
    this.mainEntities = this.hierarchyService.getMainEntities();
    this.childEntities = this.hierarchyService.getChilds();
    this.subChildEntities = this.hierarchyService.getSubChilds();
  }

  toggleLookups(): void {
    this.isLookupsExpanded = !this.isLookupsExpanded;
  }

  toggleMainEntities(): void {
    this.isMainEntitiesExpanded = !this.isMainEntitiesExpanded;
  }

  toggleChildEntities(): void {
    this.isChildEntitiesExpanded = !this.isChildEntitiesExpanded;
  }

  toggleSubChildEntities(): void {
    this.isSubChildEntitiesExpanded = !this.isSubChildEntitiesExpanded;
  }

}