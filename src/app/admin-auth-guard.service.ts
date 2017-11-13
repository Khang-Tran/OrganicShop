import { Observable } from 'rxjs/Rx';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import 'rxjs/add/operator/map';



@Injectable()
export class AdminAuthGuardService implements CanActivate {
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin)
  }

  constructor(private auth: AuthService, private userService: UserService) { }

}
