import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReportsHomeComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
