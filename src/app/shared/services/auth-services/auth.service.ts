
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'
import { UserService } from "../user-services/user.service";
import { AppUser } from "../../model/app-user";
@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private userService: UserService) {
    // Get the auth state
    this.user$ = afAuth.authState;
  }

  // Login method
  login() {
    // Get the current url before redirect to login page
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';

    // Store it in local storage
    localStorage.setItem('returnUrl', returnUrl);

    // Open Google Auth
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  // Logout method
  logout() {
    // Signout
    this.afAuth.auth.signOut();
  }

  // Map firebase.User to AppUser
  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        // Map if user is not null
        if (user) {
          return this.userService.get(user.uid)
        }
        //otherwise return null
        return Observable.of(null);
      })
  }
}
