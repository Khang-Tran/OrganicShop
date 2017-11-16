import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "./shared/services/auth-services/auth.service";
import { UserService } from "./shared/services/user-services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  authSubscription;
  constructor(private auth: AuthService, private rounter: Router, private userService: UserService) {
    this.authSubscription = auth.user$.subscribe(user => {
      // Update the logged in user
      if (user) {
        userService.save(user);
        // Get the url before redirect in localStorage and navigate to that Url
        let returnUrl = localStorage.getItem('returnUrl');
        rounter.navigateByUrl(returnUrl);
      }
    })
  }


  // destructor
  public ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}


