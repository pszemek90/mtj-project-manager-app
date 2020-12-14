import {Component, OnInit} from '@angular/core';
import {Project} from "../model/project";
import {ApiService} from "../shared/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  newProject: Project = {
    categories: [],
    customer: "",
    messages: [],
    number: "",
    title: "",
    uuid: null
  }

  constructor(private apiService:ApiService, private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.apiService.postProject(this.newProject).subscribe(
      res => {
        this.newProject.uuid = res.uuid;
        this.router.navigate(['/projects'])
      },
      error => {
        alert("An error has occurred")
      }
    );
  }
}
