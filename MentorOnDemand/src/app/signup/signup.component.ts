import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  validFormTrainee() {
    var fullName = document.forms["formTrainee"]["full_name"].value;
    if (fullName == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  validFormTrainer() {
    var fullName = document.forms["formTrainer"]["full_name"].value;
    if (fullName == "") {
      alert("Name must be filled out");
      return false;
    }
  }
}
