import {Component, OnInit} from '@angular/core';
import {Project} from "../model/project";
import {ApiService} from "../shared/api.service";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../shared/token-storage.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  searchText: string;
  isModerator = false;
  roles: string[];

  constructor(private apiService: ApiService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.getAllProjects();
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;
    this.isModerator = this.roles.includes('ROLE_MOD');
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
