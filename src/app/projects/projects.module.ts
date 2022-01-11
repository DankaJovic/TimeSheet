import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';


@NgModule({
  declarations: [
    ProjectsHomeComponent,
    ProjectsListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ProjectsModule { }
