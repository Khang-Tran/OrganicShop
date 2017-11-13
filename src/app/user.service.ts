import { AppUser } from './model/app-user';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  // Because we dont have login page or anything to manage user 
  // so we need to update Users every time they log in
  save(user: firebase.User) {
    // Get and update user with uid
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  // Get the user with uid
  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object("/users/" + uid);
  }
}
