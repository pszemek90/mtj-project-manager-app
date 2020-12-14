import {Component, OnInit} from '@angular/core';
import {Project} from "../model/project";
import {ApiService} from "../shared/api.service";
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  searchText: string;
  userName: string;

  constructor(private apiService: ApiService, private http: HttpClient) {
  }

  ngOnInit(): void {
    let url = 'http://localhost:8081/api/users/user';

    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    // let options = { headers: headers };
    this.http.post<Observable<Object>>(url, {}, {headers})
      .subscribe(principal => {
        this.userName = principal['name'];
      },
      error => {
        if(error.status == 401)
          alert('Unauthorized');
      }
    );
    this.getAllProjects();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

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
