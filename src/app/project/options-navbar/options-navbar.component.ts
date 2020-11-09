import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddCategoryComponent} from "./modals/add-category/add-category.component";
import {AddMessageComponent} from "./modals/add-message/add-message.component";
import {Category} from "../../model/category";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-options-navbar',
  templateUrl: './options-navbar.component.html',
  styleUrls: ['./options-navbar.component.css']
})
export class OptionsNavbarComponent implements OnInit {

  @Input()
  selectedIndex: number;

  constructor(public matDialog: MatDialog, public apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  addCategory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    const modalDialog = this.matDialog.open(AddCategoryComponent, dialogConfig);
  }


  addMessage() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "600px";
    dialogConfig.id = "modal-component";
    const modalDialog = this.matDialog.open(AddMessageComponent, dialogConfig);
  }

  deleteCategory(selectedIndex: number) {
    let project = this.apiService.getCurrentProject();
    project.categories.splice(selectedIndex - 1, 1);
    if (confirm("Na pewno chcesz usunąć kategorię?")) {
      this.apiService.updateProject(project).subscribe(
        res => {
          alert("Kategoria usunięta")
          window.location.reload();
        },
        error => {
          alert("An error eccurred")
        }
      )
    }
  }
}
