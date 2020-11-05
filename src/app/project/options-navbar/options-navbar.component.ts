import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../shared/modal.service";

@Component({
  selector: 'app-options-navbar',
  templateUrl: './options-navbar.component.html',
  styleUrls: ['./options-navbar.component.css']
})
export class OptionsNavbarComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id:string){
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
  }
}
