import {Component, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../shared/token-storage.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {EventEmitter} from "@angular/core";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();

  private roles: string[];
  isLoggedIn = false;
  isAdmin = false;
  isModerator = false;
  username: string;


  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private location: Location) {

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

  logout(): void {
    this.tokenStorageService.signOut();
    this.location.go('/');
    window.location.reload();
  }

  goBack() {
    this.location.back();
  }

  sendSidenavToggle(){
    this.sidenavToggle.emit();
  }
}
