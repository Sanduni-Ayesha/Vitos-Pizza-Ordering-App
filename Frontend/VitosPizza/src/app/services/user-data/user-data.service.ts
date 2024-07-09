import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public userLoggedIn: boolean = false;
  public registerUser: boolean = false;
  constructor() { }
}
