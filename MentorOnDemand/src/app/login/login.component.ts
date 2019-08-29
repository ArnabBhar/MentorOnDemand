import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedUser: string;
  constructor(public router: Router,
    private logIn: LoginService) { }

  ngOnInit() {
  }
  selectUser(event) {
    this.selectedUser = event.target.value;
  }


  login() {
    if (this.selectedUser === 'Trainee') {
      this.logIn.loginName = 'loggedIn';
      this.router.navigate(['/trainee']);
      return;
    }

    if (this.selectedUser === 'Trainer') {
      this.logIn.loginName = 'loggedIn';
      this.router.navigate(['/mentor']);
      return;
    }

    if (this.selectedUser === 'Admin') {
      this.logIn.loginName = 'loggedIn';
      this.router.navigate(['/admin']);
      return;
    }
  }

}
