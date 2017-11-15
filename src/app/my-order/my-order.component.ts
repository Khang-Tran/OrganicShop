import { OrderService } from '../order.service';
import { AuthService } from '../services/auth-services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/switchMap'
@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyOrderComponent implements OnInit {

  orders$;
  constructor(private authService: AuthService, orderService: OrderService) {
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));

  }

  ngOnInit() {
  }

}
