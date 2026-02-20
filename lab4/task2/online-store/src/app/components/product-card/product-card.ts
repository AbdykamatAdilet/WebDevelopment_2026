import { Component, Input } from '@angular/core';
import { Product } from '../../models/product_model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})

export class ProductCardComponent {

  @Input() product!: Product;
  currentImage: string = '';

  ngOnInit() {
    this.currentImage = this.product.images[0];
  }

  changeImage(img: string) {
    this.currentImage = img;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
