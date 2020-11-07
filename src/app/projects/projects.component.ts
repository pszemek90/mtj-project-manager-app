import {Component, OnInit} from '@angular/core';
import {Project} from "../model/project";
import {ApiService} from "../shared/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProjects();
  }

  public getAllProjects() {
    this.apiService.getAllProjects().subscribe(
      res => {
        this.projects = res;
      },
      error => {
        alert("An error has occurred")
      }
    );
  }

  delete(project: Project) {
    if (confirm("Czy na pewno chcesz usunąć ten projekt?")) {
      this.apiService.deleteProject(project.uuid).subscribe(
        res => {
          let indexOfProject = this.projects.indexOf(project);
          this.projects.splice(indexOfProject, 1);
        },
        error => {
          alert("An error occurred")
        }
      )
    }
  }
}
