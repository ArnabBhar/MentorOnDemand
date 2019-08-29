import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  flag1: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  flag4: boolean = false;
  flag5: boolean = false;

  listOfCourse: any[] = ['HTML', 'CSS', 'BootStrap', 'Javascript', 'Angular', 'C++', 'Java', 'Spring', 'MySQL'];
  userCourse: any[] = ['HTML', 'CSS', 'Java', 'MySQL'];
  constructor(private logIn: LoginService) { }

  ngOnInit() {
  }

  selectMentor(n) {
    this.clearFlag();
    if (n == 1) {
      this.flag1 = true;
    } else if (n == 2) {
      this.flag2 = true;
    }
    else if (n == 3) {
      this.flag3 = true;
    }
    else if (n == 4) {
      this.flag4 = true;
    }
    else if (n == 5) {
      this.flag5 = true;
    }
    else {
      //no nothing
    }
  }

  clearFlag() {
    this.flag1 = false;
    this.flag2 = false;
    this.flag3 = false;
    this.flag4 = false;
    this.flag5 = false;
  }


  selectedSkills(name) {
    let courseTemp = this.userCourse.find((temp) => {
      return temp == name;
    });
    if (courseTemp == undefined) {
      this.userCourse.push(name);
    }

  }

}
