import { Component,OnInit } from '@angular/core';
import {LookupEntity} from '../interfaces/lookups-entity'
import {LookupService} from '../services/lookup.service'
 import { CommonModule } from '@angular/common';

import {HeaderComponent} from '../../header/header.component'


@Component({
  selector: 'app-lookups',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './lookups.component.html',
  styleUrl: './lookups.component.css'
})
export class LookupsComponent  implements OnInit {
  entities: LookupEntity[] = [];

  constructor(private lookupService: LookupService) {}

  ngOnInit(): void {
    this.lookupService.getEntities().subscribe(data => {
      this.entities = data;
    });
  }
}
