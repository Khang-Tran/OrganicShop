import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CategoryService } from "../../services/goods-services/category.service";

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFilterComponent {
  // the list of categories from the database
  categories$;
  // this input to high light the current selected category
  @Input('category') category;
  constructor(categoryService: CategoryService) {
    // get the categories from the database by CategoryService
    this.categories$ = categoryService.getAll();
  }
}
