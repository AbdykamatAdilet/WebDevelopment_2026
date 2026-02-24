import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product_service';
import { Category } from './models/category_model';
import { Product } from './models/product_model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  categories: Category[] = [];
  selectedCategoryId: number = 0;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.selectCategory(0);
  }

  selectCategory(categoryId: number) {

    this.selectedCategoryId = categoryId;
    this.products = this.productService.getProductsByCategory(categoryId);
  }
}
