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
  loginWithGoogle() {
    this.auth.login('Google');
  }

  loginWithFacebook() {
    this.auth.login('Facebook');
  }

  loginWithTwitter() {
    this.auth.login('Twitter');
  }



}
