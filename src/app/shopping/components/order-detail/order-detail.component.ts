import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth-services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderDetailComponent implements OnInit {

  order$;
  orderId;
  cart$;
  constructor(private authService: AuthService,
    orderService: OrderService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService) {
    this.route.params.subscribe(params => this.orderId = params['id']);
    this.order$ = orderService.getOrderById(this.orderId);
  }


  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

}
