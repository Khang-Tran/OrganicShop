import { Observable } from 'rxjs/Rx';
import { AppUser } from '../model/app-user';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from "../services/auth-services/auth.service";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BsNavbarComponent implements OnDestroy {
  // hold the user info
  appUser: AppUser;

  subscription;

  constructor(private auth: AuthService) {
    // get the app user by AuthService
    this.subscription = auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  // log out
  logout() {
    this.auth.logout();
  }

  // unsubscribe
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
