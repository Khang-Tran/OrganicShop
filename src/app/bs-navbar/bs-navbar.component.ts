import { Observable } from 'rxjs/Rx';
import { AppUser } from '../model/app-user';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { AuthService } from '../auth.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BsNavbarComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  appUser: AppUser;
  subscription;
  constructor(private auth: AuthService) {
    this.subscription = auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
  }


}
