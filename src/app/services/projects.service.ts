import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  allProjects: Project[] = [];

  lastId = 10;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data: Project[]) => {
      this.allProjects = data;
    })
   }

   getJSON(): Observable<any> {
    return this.http.get("./assets/json/projectsJson.json")
  }

  addProjects(newProject: Project){
    this.lastId += 1;
    newProject._id = this.lastId;
    this.allProjects.push(new Project(newProject))
  }
}
