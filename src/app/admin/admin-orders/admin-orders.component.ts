import { OrderService } from '../../order.service';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminOrdersComponent {
  orders$;

  constructor(orderService: OrderService) {
    this.orders$ = orderService.getOrders();
  }
}
