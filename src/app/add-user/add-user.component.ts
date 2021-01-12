import { Component, OnInit } from '@angular/core';
import {Project} from "../model/project";
import {ApiService} from "../shared/api.service";
import {Router} from "@angular/router";
import {User} from "../model/user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  isAdmin = false;
  isModerator = false;

  newUser: User = {
    roles: [], username: "",
    email: "", firstName: "", lastName: "", password: "", uuid: ""
  }

  constructor(private apiService:ApiService, private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit() {

    if (this.isModerator){
      this.newUser.roles.push("mod");
    }

    if (this.isAdmin){
      this.newUser.roles.push("admin");
    }

    this.apiService.postUser(this.newUser).subscribe(
      res => {
        this.newUser.uuid = res.uuid;
        this.router.navigate(['/'])
      },
      error => {
        alert("An error has occurred")
      }
    );
  }
}
