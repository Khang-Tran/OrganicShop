import { LoginMethod } from '../../../shared/model/login';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../../../shared/services/auth-services/auth.service";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  // log in method by AuthService
  login(method) {
    switch (method){
      case LoginMethod.Google:
      this.auth.login(LoginMethod.Google);
      break;

      case LoginMethod.Twitter:
      this.auth.login(LoginMethod.Twitter);
      break;

      case LoginMethod.Facebook:
      this.auth.login(LoginMethod.Facebook);
      break;
    }  
  }
}
