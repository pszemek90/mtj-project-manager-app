import {Component, OnInit} from '@angular/core';
import {Project} from "../model/project";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {ApiService} from "../shared/api.service";
import {FormControl} from "@angular/forms";
import {Message} from "../model/message";
import {TokenStorageService} from "../shared/token-storage.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  selected = new FormControl(0);
  roles: string[];
  isModerator = false;

  project: Project = {
    categories: [],
    customer: "",
    messages: [],
    number: "",
    title: "",
    uuid: ""

  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getProject(params.get('uuid')))
    ).subscribe(
      res => {
        this.project = res;
        this.apiService.setProject(this.project);
      }
    )
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;
    this.isModerator = this.roles.includes('ROLE_MOD');
  }

  deleteMessage(message: Message) {
    let messageToDeleteIndex = this.project.messages.indexOf(message, 0);
    this.project.messages.splice(messageToDeleteIndex, 1);
    this.apiService.updateProject(this.project).subscribe(
      res => {
        alert("Wiadomość usunięta");
      },
      error => {
        alert("An error occurred");
      }

    );
  }
}
