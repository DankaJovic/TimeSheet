import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

import projectsJson from '../../../assets/json/projectsJson.json';

@Component({
  selector: 'tsh-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: { projectName: string, description: string, customer: string, leadName: string }[] = projectsJson;

  curPage: number = 1;
  pageSize: number = 3;


  constructor(private _Projects: ProjectsService) { }

  ngOnInit(): void {
  
  }

  numberOfPages() {
    return Math.ceil(this.projects.length / this.pageSize)
  }

}
