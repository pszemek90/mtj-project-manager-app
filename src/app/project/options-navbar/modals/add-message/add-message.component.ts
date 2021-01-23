import {Component, OnInit} from '@angular/core';
import {Project} from "../../../../model/project";
import {MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../../../shared/api.service";
import {Message} from "../../../../model/message";
import {ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER];


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

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.message.tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.message.tags.indexOf(tag);

    if (index >= 0) {
      this.message.tags.splice(index, 1);
    }
  }
}
