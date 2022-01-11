import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSheetHomeComponent } from './time-sheet-home/time-sheet-home.component';

const routes: Routes = [
  { path: "", component: TimeSheetHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSheetRoutingModule { }
