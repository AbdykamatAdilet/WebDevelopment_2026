import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product_model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
  imports: [CommonModule]
})
export class ProductCardComponent {

  product = input.required<Product>();
  delete = output<number>();

  currentImage: string = '';

  ngOnInit() {
    const images = this.product().images;
    if (images && images.length > 0) {
      this.currentImage = images[0];
    }
  }

  changeImage(img: string) {
    this.currentImage = img;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  like() {
    this.product().likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
  }
}
