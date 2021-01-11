import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../../../shared/api.service";
import {Project} from "../../../../model/project";
import {Category} from "../../../../model/category";

@Component({
  selector: 'app-modal',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category = {
    project: "", title: "", uuid: ""

  };

  project: Project = {
    categories: [], customer: "", messages: [], number: "", title: "", uuid: ""

  };

  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.project = this.apiService.getCurrentProject();
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.category.project = this.project.uuid;
    this.project.categories.push(this.category.title);
    this.apiService.updateProject(this.project).subscribe(
      res => {
        alert("Kategoria dodana")
        window.location.reload();
      },
      error => {
        alert("An error occurred")
      }
    );
  }
}
