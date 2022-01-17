import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

import projectsJson from '../../../assets/json/projectsJson.json';

@Component({
  selector: 'tsh-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  curPage: number = 1;
  pageSize: number = 3;

  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // projects: { projectName: string, description: string, customer: string, leadName: string }[] = projectsJson;

  // projectsToDisplay: { projectName: string, description: string, customer: string, leadName: string }[] = []

  allProjects: Project[] = [];

  rez: Project[] = [];

  constructor(private _Projects: ProjectsService) { }

  ngOnInit(): void {
    this.getAllProjects()
  }

  numberOfPages() {
    return Math.ceil(this.allProjects.length / this.pageSize)
  }

  // initializeProjects(){
  //   this.projectsToDisplay = this.projects;
  // }

  // onLetterClick(letter: string){
  //   this.projectsToDisplay = [];

  //   for(let i = 0; i < this.projects.length; i++){
  //     let firstLetter = this.projects[i].projectName.charAt(0).toUpperCase();
  //     if(firstLetter === letter.toUpperCase()){
  //       this.projectsToDisplay.push(this.projects[i]);
  //     }
  //   }
  // }

  getAllProjects(){
    this._Projects.getJSON().subscribe(data => {
      this.allProjects = data
    })
  }

  getFirstLetter(letter:string){
    let firstLetter = this.allProjects.filter(function(slovo){
      return slovo.projectName.charAt(0).toUpperCase() === letter.toUpperCase()
    })
    console.log(firstLetter)
  }
}
