import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamMembersHomeComponent } from './team-members-home/team-members-home.component';

const routes: Routes = [
  { path: "", component: TeamMembersHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamMembersRoutingModule { }
