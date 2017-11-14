import { Product } from '../model/product';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent {

  constructor() { }
  // directive for biding the product in order display its info in the card
  @Input('product') product: Product;

  // determine whether display 'Add to Cart' button in the card or not
  @Input('show-actions') showAction = true;
}
