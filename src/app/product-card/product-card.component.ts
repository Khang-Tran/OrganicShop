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

  @Input('product') product: Product;
  @Input('show-actions') showAction = true;
}
