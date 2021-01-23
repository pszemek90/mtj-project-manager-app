import {Component, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../shared/token-storage.service";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-sidenav-buttons',
  templateUrl: './sidenav-buttons.component.html',
  styleUrls: ['./sidenav-buttons.component.css']
})
export class SidenavButtonsComponent implements OnInit {

  @Output() closeSidebar = new EventEmitter();

  private roles: string[];
  isLoggedIn = false;
  isAdmin = false;
  isModerator = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isModerator = this.roles.includes('ROLE_MOD');
      this.username = user.username;
    }
  }

  closeSidenav() {
    this.closeSidebar.emit();
  }
}
