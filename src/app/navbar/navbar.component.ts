import {Component, OnInit} from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private apiService: ApiService, private router: Router) {

  }

  ngOnInit(): void {
  }

  isAuthenticated(): boolean {
    return this.apiService.isAuthenticated();
  }

  logout() {
    sessionStorage.setItem('token', '');
    this.router.navigateByUrl('/projects');
  }
}
