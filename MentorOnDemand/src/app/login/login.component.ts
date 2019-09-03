import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
  });

  userData;
  selectedUser: string;
  constructor(public router: Router,
    private logIn: LoginService,
    private http: HttpClient) { }

  ngOnInit() {
  }
  selectUser(event) {
    this.selectedUser = event.target.value;
  }


  login() {
    if (this.selectedUser === 'Trainee') {
      this.http.get('/assets/users.json').subscribe(userdata => {
        this.userData = userdata;
        for (let i = 0; i < 1; i++) {
          if (this.userData[i].username == this.loginDetails.get('username').value && this.userData[i].password == this.loginDetails.get('password').value) {
            this.logIn.loginName = 'loggedIn';
            this.router.navigate(['/trainee']);
            return true;
          }
        }
        alert("wrong credentials");
      });
    }

    if (this.selectedUser === 'Trainer') {
      this.http.get('/assets/mentor.json').subscribe(userdata => {
        this.userData = userdata;
        for (let i = 0; i < 1; i++) {
          if (this.userData[i].username == this.loginDetails.get('username').value && this.userData[i].password == this.loginDetails.get('password').value) {

            this.logIn.loginName = 'loggedIn';
            this.router.navigate(['/mentor']);
            return true;
          }
        }
        alert("wrong credentials");
      });
    }

    if (this.selectedUser === 'Admin') {
      this.http.get('/assets/admin.json').subscribe(userdata => {
        this.userData = userdata;
        for (let i = 0; i < 1; i++) {
          if (this.userData[i].username == this.loginDetails.get('username').value && this.userData[i].password == this.loginDetails.get('password').value) {
            this.logIn.loginName = 'loggedIn';
            this.router.navigate(['/admin']);
            return true;
          }
        }
        alert("wrong credentials");
      });
    }
  }

}
