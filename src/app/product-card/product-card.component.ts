import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../model/product';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent {

  constructor(private cartService: ShoppingCartService) { }
  // directive for biding the product in order display its info in the card
  @Input('product') product: Product;

  // determine whether display 'Add to Cart' button in the card or not
  @Input('show-actions') showAction = true;

  @Input('shopping-cart') shoppingCart: ShoppingCart;

  addToCart() {
    this.cartService.addToCart(this.product);
  }

}
