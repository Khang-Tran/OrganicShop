import { Observable } from 'rxjs/Rx';
import { Order } from '../../../shared/model/order';
import { FirebaseListObservable } from 'angularfire2/database';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth-services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/switchMap'
@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyOrderComponent implements OnInit {

  orders$: Observable<Order[]>
  constructor(private authService: AuthService, orderService: OrderService) {
    // Switch type from FirebaseListObservable to Observable
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }

  ngOnInit() {
  }

}
