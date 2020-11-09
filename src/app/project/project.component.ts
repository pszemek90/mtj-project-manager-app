import {Component, OnInit} from '@angular/core';
import {Project} from "../model/project";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {ApiService} from "../shared/api.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  selected = new FormControl(0);

  project: Project = {
    categories: [],
    customer: "",
    messages: [],
    number: "",
    title: "",
    uuid: ""

  };

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
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
  }
}
