import { CategoryService } from '../../category.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}
