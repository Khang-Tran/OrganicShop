import { Product } from '../../../shared/model/product';
import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ProductService } from "../../../shared/services/goods-services/product.service";
@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProductsComponent implements OnDestroy {

  // products from the database
  products: Product[];
  // this product array responsible for displaying after filtered
  filteredProducts: any[];
  // for unsubscribe after finish
  subscription: Subscription;

  constructor(private productService: ProductService) {
    // get the products from database by product service and assign these values to these variables above
    this.subscription = this.productService.getAll()
      .subscribe(product => this.filteredProducts = this.products = product);
  }

  // filter the products by name by given query, 
  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  // unsubscribe
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
