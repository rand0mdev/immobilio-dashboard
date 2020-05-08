import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncaissementsRoutingModule } from './encaissements-routing.module';
import { EncaissementsComponent } from './encaissements.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [EncaissementsComponent, TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    EncaissementsRoutingModule
  ]
})
export class EncaissementsModule { }
