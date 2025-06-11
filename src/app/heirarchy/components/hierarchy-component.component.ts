import { Component, OnInit } from '@angular/core';
import {Lookup , MainEntity,ChildDetail , SubChildEntity} from '../interfaces/heirarchy-entities'
import {HierarchyService} from '../servuces/heirarch.services'
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../../header/header.component'


@Component({
  selector: 'app-hierarchy',
    imports: [CommonModule,HeaderComponent],
  
  templateUrl: './hierarchy-component.component.html',
  styleUrls: ['./hierarchy-component.component.css']
})

export class HierarchyComponent implements OnInit {
  hierarchy: Lookup[] = [];
  expandedLookups: Set<string> = new Set();
  expandedMainEntities: Set<string> = new Set();
  expandedChildDetails: Set<string> = new Set();

  constructor(private hierarchyService: HierarchyService) {}

  ngOnInit(): void {
    this.hierarchy = this.hierarchyService.getHierarchy();
  }

  toggleLookup(lookupName: string): void {
    if (this.expandedLookups.has(lookupName)) {
      this.expandedLookups.delete(lookupName);
    } else {
      this.expandedLookups.add(lookupName);
    }
  }

  toggleMainEntity(mainEntityName: string): void {
    if (this.expandedMainEntities.has(mainEntityName)) {
      this.expandedMainEntities.delete(mainEntityName);
    } else {
      this.expandedMainEntities.add(mainEntityName);
    }
  }

  toggleChildDetail(childDetailName: string): void {
    if (this.expandedChildDetails.has(childDetailName)) {
      this.expandedChildDetails.delete(childDetailName);
    } else {
      this.expandedChildDetails.add(childDetailName);
    }
  }
}