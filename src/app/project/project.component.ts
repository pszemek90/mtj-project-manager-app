import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList
} from '@angular/core';
import {Project} from "../projects/model/project";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {delay, map, startWith, switchMap} from "rxjs/operators";
import {ApiService} from "../shared/api.service";
import {Observable} from "rxjs";
import {TabItemComponent} from "./tabs/tab-item/tab-item.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project = {
    categories: [],
    customer: "",
    messages: [],
    number: "",
    title: "",
    uuid: ""

  };

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.apiService.getProject(params.get('uuid')))
    ).subscribe(
      res => {
        this.project = res;
      }
    )
  }

}
