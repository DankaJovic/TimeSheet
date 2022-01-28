import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'tsh-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  curPage: number = 1;
  pageSize: number = 3;

  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  allProjects: Project[] = [];

  projectsToDisplay: Project[] = [];

  constructor(private _Projects: ProjectsService) { }

  ngOnInit(): void {
    this.getAllProjects()
  }

  getAllProjects(){
      this.allProjects = this._Projects.allProjects;
      this.projectsToDisplay = this.allProjects;
  }

  numberOfPages() {
    return Math.ceil(this.allProjects.length / this.pageSize)
  }

  getFirstLetter(letter:string){
    let firstLetter = this.allProjects.filter(function(projectObj){
      return projectObj.projectName.charAt(0).toUpperCase() === letter.toUpperCase()
    })
    this.projectsToDisplay = firstLetter;
  }
}
