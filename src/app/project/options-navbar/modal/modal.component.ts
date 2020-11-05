import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../../shared/api.service";
import {Router} from "@angular/router";
import {Project} from "../../../projects/model/project";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  category: string;

  project: Project;

  constructor(public dialogRef: MatDialogRef<ModalComponent>, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.project = this.apiService.getCurrentProject();
  }

  closeModal(){
    this.dialogRef.close();
  }

  onSubmit() {
    this.apiService.updateProject(this.project.uuid, this.category).subscribe(
      res => {
        alert("Kategoria dodana")
      },
      error => {
        alert("An error occurred")
      }
    );
  }
}
