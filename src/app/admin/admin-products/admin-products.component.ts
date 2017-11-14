import { Product } from '../../model/product';
import { Subscription } from 'rxjs/Rx';
import { ProductService } from '../../product.service';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProductsComponent implements OnDestroy {

  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(product => this.filteredProducts = this.products = product);
  }


  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
