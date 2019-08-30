import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  flag1: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  flag4: boolean = false;

  constructor(private logIn: LoginService) { }

  ngOnInit() {
  }

  clearFlag() {
    this.flag1 = false;
    this.flag2 = false;
    this.flag3 = false;
    this.flag4 = false;
  }

  selectTab(n) {
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
    else {
      //no nothing
    }
  }
}
