import { ShoppingCart } from '../model/shopping-cart';
import { Observable } from 'rxjs/Rx';
import { AppUser } from '../model/app-user';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from "../services/auth-services/auth.service";
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BsNavbarComponent implements OnDestroy, OnInit {
  // hold the user info
  appUser: AppUser;

  subscription;
  cart$: Observable<ShoppingCart>;
  constructor(private auth: AuthService, private cartService: ShoppingCartService) {
    // get the app user by AuthService
    this.subscription = auth.appUser$.subscribe(appUser => this.appUser = appUser);

  }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
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
