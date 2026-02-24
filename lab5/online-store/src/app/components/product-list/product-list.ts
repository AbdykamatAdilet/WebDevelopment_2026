import { Component, input, output, computed } from '@angular/core';
import { Product } from '../../models/product_model';
import { ProductCardComponent } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,
            CommonModule
  ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products = input.required<Product[]>();
  delete = output<number>();

  deleteProduct(productId: number) {
    this.delete.emit(productId);
  }
  categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Electronics' },
    { id: 4, name: 'Other' }
  ];

  selectedCategory = 0;

  selectCategory(id: number) {
    this.selectedCategory = id;
  }

  filteredProducts = computed(() => {
    if (this.selectedCategory === 0) {
      return this.products();
    }
    return this.products().filter(
      p => p.categoryId === this.selectedCategory
    );
  });
}
