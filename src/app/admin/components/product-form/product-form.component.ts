import { Product } from '../../../shared/model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/take';
import { CategoryService } from "../../../shared/services/goods-services/category.service";
import { ProductService } from "../../../shared/services/goods-services/product.service";
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent {
  // hold the products from the database. 
  // this initialization makes sure that the page wont crash in the very beginning
  product: Product = new Product();

  // hold the Observable of category
  categories$;

  // current product id 
  id;
  constructor(categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    // get the categories from the database by categoryService
    this.categories$ = categoryService.getAll();

    // get the id parameter from ActivatedRoute
    this.id = this.route.snapshot.paramMap.get('id');

    // if this id is not null, take only one product and then unsubscribe. 
    // this operation is done by 'take' function
    if (this.id)
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  // depend on the product id, this function will perform either create or update operation
  save(product) {
    // if the id is already existed, update the product
    if (this.id)
      this.productService.update(this.id, product);

    // otherwise create new one
    else
      this.productService.create(product);

    // navigate to products page without waiting for result
    this.router.navigate(["/admin/products"]);
  }

  // this function performs delete operation by a given product id
  delete() {
    if (!confirm("Are you sure want to delete this product?"))
      return;

    // delete the product
    this.productService.delete(this.id);

    // navigate to product page
    this.router.navigate(["/admin/products"]);
  }
}
