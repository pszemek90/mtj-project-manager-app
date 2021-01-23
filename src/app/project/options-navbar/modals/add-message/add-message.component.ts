import {Component, OnInit} from '@angular/core';
import {Project} from "../../../../model/project";
import {MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../../../shared/api.service";
import {Message} from "../../../../model/message";

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  message: Message = {
    tags: [],
    date: undefined,
    project: "",
    category: "", text: "", title: "", uuid: ""

  }

  project: Project = {
    categories: [], customer: "", messages: [], number: "", title: "", uuid: ""

  };

  constructor(public dialogRef: MatDialogRef<AddMessageComponent>, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.project = this.apiService.getCurrentProject();
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.message.project = this.project.uuid;
    this.message.date = Date.now();
    this.project.messages.push(this.message);
    this.apiService.updateProject(this.project).subscribe(
      res => {
        alert("Wiadomość dodana")
        window.location.reload();
      },
      error => {
        alert("An error occurred")
      }
    );
  }

  addTag(tag: string) {
    if (tag) {
      this.message.tags.push(tag);
    }
  }
}
