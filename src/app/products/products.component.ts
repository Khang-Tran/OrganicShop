import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/switchmap'
import { ProductService } from "../services/goods-services/product.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent {
  // similar to admin products component
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  constructor(productService: ProductService, route: ActivatedRoute) {
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
}
