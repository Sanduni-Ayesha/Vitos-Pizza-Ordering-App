import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../../services/user-data/user-data.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent{
  userLoggedIn : boolean = this.userDataService.userLoggedIn;
  constructor(private userDataService  : UserDataService) {
  }

  registerUser() {
    this.userDataService.registerUser = true
  }
}
