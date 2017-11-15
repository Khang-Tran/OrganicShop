import { Subscription } from 'rxjs/Rx';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/switchmap';
import { ProductService } from "../services/goods-services/product.service";
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit, OnDestroy {
  // similar to admin products component
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  subscription: Subscription;
  cart;
  constructor(productService: ProductService, route: ActivatedRoute, private cartService: ShoppingCartService) {
    productService.getAll().
      switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) : this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart()).subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
