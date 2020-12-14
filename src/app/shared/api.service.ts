import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../model/project";
import {Category} from "../model/category";
import {Message} from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private project: Project;

  private BASE_URL = window["cfgApiBaseUrl"] + "/api";
  private ALL_PROJECTS_URL = `${this.BASE_URL}\\projects`;
  private CREATE_PROJECT_URL = `${this.BASE_URL}\\projects\\add`;
  private DELETE_PROJECT_URL = `${this.BASE_URL}\\projects`;
  private GET_PROJECT_URL = `${this.BASE_URL}\\projects`;
  private UPDATE_PROJECT_URL = `${this.BASE_URL}\\projects`;
  private GET_MESSAGE_URL= `${this.BASE_URL}\\projects`;

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get<Project[]>(this.ALL_PROJECTS_URL, {headers});
  }

  postProject(project: Project): Observable<Project>{
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    return this.http.post<Project>(this.CREATE_PROJECT_URL, project, {headers});
  }

  deleteProject(uuid: string): Observable<any>{
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    return this.http.delete(this.DELETE_PROJECT_URL + "/" + uuid, {headers});
  }

  getProject(uuid: string): Observable<Project>{
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get<Project>(this.GET_PROJECT_URL + "/" + uuid, {headers});
  }

  getMessage(pUuid: string, mUuid: string): Observable<Message>{
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get<Message>(this.GET_MESSAGE_URL + "/" + pUuid + "/messages/" + mUuid, {headers});
  }

  updateProject(project: Project): Observable<Project>{
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    return this.http.put<Project>(this.UPDATE_PROJECT_URL + "/" + project.uuid, project, {headers});
  }

  addCategory(uuid:string, category: Category): Observable<Project>{
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    return this.http.post<Project>(this.UPDATE_PROJECT_URL + "/" + uuid, category, {headers});
  }

  addMessage(uuid:string, message: Message): Observable<Project>{
    const headers = new HttpHeaders({'Authorization': 'Basic ' + sessionStorage.getItem('token')});
    return this.http.post<Project>(this.UPDATE_PROJECT_URL + "/" + uuid, message, {headers});
  }

  isAuthenticated(): boolean{
    return sessionStorage.getItem('token') != '';
  }

  setProject(project: Project) {
    this.project = project;
  }

  getCurrentProject(): Project{
    return this.project;
  }
}
