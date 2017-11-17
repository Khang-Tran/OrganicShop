import { Observable } from 'rxjs/Rx';
import { AuthService } from '../../shared/services/auth-services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import 'rxjs/add/operator/map';
import { UserService } from "../../shared/services/user-services/user.service";



@Injectable()
export class AdminAuthGuardService implements CanActivate {
   constructor(private auth: AuthService, private userService: UserService) { }

  // Only user admin has access
  canActivate(): Observable<boolean> {
    // this map translate the result from Observable<AppUser> into boolean
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin)
  }

 
}
