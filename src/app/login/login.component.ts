import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    email: "", firstName: "", lastName: "", password: "", uuid: ""

  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    let url = 'http://localhost:8081/api/users/login';
    this.http.post<Observable<boolean>>(url, this.user).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', btoa(this.user.email + ':' + this.user.password));
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }
}
