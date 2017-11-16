import { Observable } from 'rxjs/Rx';
import { ShoppingCart } from '../../../shared/model/shopping-cart';
import { Product } from '../../../shared/model/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/switchmap';
import { ProductService } from "../../../shared/services/goods-services/product.service";
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  // similar to admin products component
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  cart$: Observable<ShoppingCart>;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService) { }
  async ngOnInit() {
    this.cart$ = await this.cartService.getCart()
    this.populateProducts();
  }
  private populateProducts() {

    this.productService.getAll().
      switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }



  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) : this.products;
  }

}
