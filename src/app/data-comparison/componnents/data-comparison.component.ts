import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntity } from '../interfaces/data-entity';
import { DataComparisonService } from '../services/data-comparison.service';
import {HeaderComponent} from '../../header/header.component'

@Component({
  selector: 'app-data-comparison',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './data-comparison.component.html',
  styleUrls: ['./data-comparison.component.css']
})
export class DataComparisonComponent implements OnInit {
  entities: DataEntity[] = [];
  loading = false;
  totalEntities = 0;

   
  constructor(private dataComparisonService: DataComparisonService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.dataComparisonService.getEntities().subscribe({
      next: (data) => {
        this.entities = data;
        this.totalEntities = this.getTotalEntitiesCount(data);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading data:', error);
        this.loading = false;
      }
    });
  }

  toggleExpand(entity: DataEntity): void {
    if (entity.children && entity.children.length > 0) {
      entity.isExpanded = !entity.isExpanded;
    }
  }

  hasChildren(entity: DataEntity): boolean {
    return entity.children!=null && entity.children.length > 0;
  }

  getTotalEntitiesCount(entities: DataEntity[]): number {
    let count = entities.length;
    entities.forEach(entity => {
      if (entity.children) {
        count += this.getTotalEntitiesCount(entity.children);
      }
    });
    return count;
  }



 
  refreshData(): void {
    this.loadData();
  }
}