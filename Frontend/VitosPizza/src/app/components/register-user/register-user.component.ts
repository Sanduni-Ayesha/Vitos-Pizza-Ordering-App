import { Component } from '@angular/core';
import {UserDataService} from "../../services/user-data/user-data.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  userRegistered : boolean = this.userDataService.registerUser;
  constructor(private userDataService  : UserDataService) {
  }

  registerUser() {
    this.userDataService.registerUser = false;
    this.userDataService.userLoggedIn = true;
    console.log(this.userDataService.userLoggedIn)
  }
}
