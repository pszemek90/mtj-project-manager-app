import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalComponent} from "./modal/modal.component";

@Component({
  selector: 'app-options-navbar',
  templateUrl: './options-navbar.component.html',
  styleUrls: ['./options-navbar.component.css']
})
export class OptionsNavbarComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }


}
