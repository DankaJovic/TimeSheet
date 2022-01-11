import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSheetRoutingModule } from './time-sheet-routing.module';
import { TimeSheetHomeComponent } from './time-sheet-home/time-sheet-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TimeSheetHomeComponent
  ],
  imports: [
    CommonModule,
    TimeSheetRoutingModule,
    SharedModule
  ]
})
export class TimeSheetModule { }
