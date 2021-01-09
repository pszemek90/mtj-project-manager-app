import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {User} from "../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user:User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error => {
        this.errorMessage = error.errorMessage;
        this.isSignUpFailed = true;
      }
    )
  }

}
