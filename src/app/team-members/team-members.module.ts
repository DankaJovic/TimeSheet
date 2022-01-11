import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamMembersRoutingModule } from './team-members-routing.module';
import { TeamMembersHomeComponent } from './team-members-home/team-members-home.component';
import { SharedModule } from '../shared/shared.module';
import { TeamMembersListComponent } from './team-members-list/team-members-list.component';



@NgModule({
  declarations: [
    TeamMembersHomeComponent,
    TeamMembersListComponent
  ],
  imports: [
    CommonModule,
    TeamMembersRoutingModule,
    SharedModule
  ],
  exports: []
})
export class TeamMembersModule { }
