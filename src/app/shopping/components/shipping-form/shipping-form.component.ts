import { Shipping } from '../../../shared/model/shipping';
import { ShoppingCart } from '../../../shared/model/shopping-cart';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { AuthService } from '../../../shared/services/auth-services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Order } from '../../../shared/model/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  userId: string;
  userSubscription: Subscription;
  shipping: Shipping = new Shipping();

  @Input('cart') cart: ShoppingCart;
  constructor(
    private cartService: ShoppingCartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);

  }
  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = this.orderService.storeOrder(order);
    this.cartService.clearCart();
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();

  }

}
