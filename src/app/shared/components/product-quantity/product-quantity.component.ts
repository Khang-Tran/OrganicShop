import { Product } from '../../model/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductQuantityComponent {

  constructor(private cartService: ShoppingCartService) { }
  
  @Input('product') product: Product;

  @Input('shopping-cart') shoppingCart;

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

 

}
