import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../projects/model/project";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://localhost:8080/api";
  private ALL_PROJECTS_URL = `${this.BASE_URL}\\projects`;
  private CREATE_PROJECT = `${this.BASE_URL}\\projects\\add`;
  private DELETE_PROJECT = `${this.BASE_URL}\\projects`;

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.ALL_PROJECTS_URL);
  }

  postProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.CREATE_PROJECT, project);
  }

  deleteProject(uuid: string): Observable<any>{
    return this.http.delete(this.DELETE_PROJECT + "/" + uuid);
  }
}
