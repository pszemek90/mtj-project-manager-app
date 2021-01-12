import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../model/project";
import {Category} from "../model/category";
import {Message} from "../model/message";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private project: Project;

  private BASE_URL = window["cfgApiBaseUrl"] + "/api";
  private ALL_PROJECTS_URL = `${this.BASE_URL}\\projects`;
  private CREATE_PROJECT_URL = `${this.BASE_URL}\\projects\\add-project`;
  private DELETE_PROJECT_URL = `${this.BASE_URL}\\projects`;
  private GET_PROJECT_URL = `${this.BASE_URL}\\projects`;
  private UPDATE_PROJECT_URL = `${this.BASE_URL}\\projects`;
  private GET_MESSAGE_URL= `${this.BASE_URL}\\projects`;
  private CREATE_USER_URL= `${this.BASE_URL}\\auth\\signup`;

  constructor(private http: HttpClient) {
  }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.ALL_PROJECTS_URL);
  }

  postProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.CREATE_PROJECT_URL, project);
  }

  deleteProject(uuid: string): Observable<any>{
    return this.http.delete(this.DELETE_PROJECT_URL + "/" + uuid);
  }

  getProject(uuid: string): Observable<Project>{
    return this.http.get<Project>(this.GET_PROJECT_URL + "/" + uuid);
  }

  getMessage(pUuid: string, mUuid: string): Observable<Message>{
    return this.http.get<Message>(this.GET_MESSAGE_URL + "/" + pUuid + "/messages/" + mUuid);
  }

  updateProject(project: Project): Observable<Project>{
    return this.http.put<Project>(this.UPDATE_PROJECT_URL + "/" + project.uuid, project);
  }

  addCategory(uuid:string, category: Category): Observable<Project>{
    return this.http.post<Project>(this.UPDATE_PROJECT_URL + "/" + uuid, category);
  }

  addMessage(uuid:string, message: Message): Observable<Project>{
    return this.http.post<Project>(this.UPDATE_PROJECT_URL + "/" + uuid, message);
  }

  setProject(project: Project) {
    this.project = project;
  }

  getCurrentProject(): Project{
    return this.project;
  }

  postUser(user: User): Observable<User>{
    return this.http.post<User>(this.CREATE_USER_URL, user);
  }
}
