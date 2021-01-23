import {Component, OnInit} from '@angular/core';
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ApiService} from "../shared/api.service";
import {Message} from "../model/message";
import {Project} from "../model/project";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public message: Message = {
    tags: [],
    category: "", date: 0, project: "", text: "", title: "", uuid: ""
  };

  public project: Project = {
    categories: [], customer: "", messages: [], number: "", title: "", uuid: ""
  };

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getMessage(params.get('pUuid'), params.get('mUuid')))
    ).subscribe(
      res => {
        this.message = res;
      }
    )
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
        this.apiService.getProject(params.get('pUuid')))
    ).subscribe(
      res =>{
        this.project = res;
      }
    )
  }

}
