import { ShoppingCart } from '../../../shared/model/shopping-cart';
import { Observable } from 'rxjs/Rx';
import { Order } from '../../../shared/model/order';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth-services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import 'rxjs/add/operator/take'
@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderDetailComponent implements OnInit {

  // Hold the order for displaying
  order$: FirebaseObjectObservable<Order>;

  // Hold the shopping cart
  cart$: Observable<ShoppingCart>
  constructor(private authService: AuthService,
    orderService: OrderService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService) {
    // Take the orderId from the url
    let orderId;
     this.route.params.take(1).subscribe(params => orderId = params['id']);
    this.order$ = orderService.getOrderById(orderId);
  }

 async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
}
