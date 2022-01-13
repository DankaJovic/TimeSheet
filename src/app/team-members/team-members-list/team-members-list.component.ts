import { Component, OnInit } from '@angular/core';
import { TeamMembersService } from 'src/app/services/team-members.service';

import teamMembersJson from '../../../assets/json/teamMembersJson.json'

@Component({
  selector: 'tsh-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.css']
})
export class TeamMembersListComponent implements OnInit {

  teamMembers: { teamMemberName: string, username: string, status: boolean, hoursPerWeek: number, email: string, role: boolean} [] = teamMembersJson;
  
  curPage: number = 1;
  pageSize: number = 3;

  constructor(private _TeamMembers: TeamMembersService) { }

  ngOnInit(): void {
  }

  numberOfPages() {
    return Math.ceil(this.teamMembers.length / this.pageSize)
  }
}
