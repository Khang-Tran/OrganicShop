import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingCart } from '../../../shared/model/shopping-cart';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingCartSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('cart') cart: ShoppingCart;

}
