import { FirebaseListObservable } from 'angularfire2/database';
import { Order } from '../../../shared/model/order';
import { Observable } from 'rxjs/Rx';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminOrdersComponent {
  // just take all orders and display it using async
  orders$: FirebaseListObservable<Order[]>

  constructor(orderService: OrderService) {
    this.orders$ = orderService.getOrders();
  }
}
