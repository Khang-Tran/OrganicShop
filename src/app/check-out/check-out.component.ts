
import { Observable, Subscription } from 'rxjs/Rx';
import { ShoppingCart } from '../model/shopping-cart';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckOutComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

  cart$: Observable<ShoppingCart>

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }


}
