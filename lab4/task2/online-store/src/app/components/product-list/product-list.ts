import { Component } from '@angular/core';
import { Product } from '../../models/product_model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Современный смартфон Apple с мощным процессором и отличной камерой.',
      price: 589000,
      rating: 4.8,
      image: 'https://www.dxomark.com/wp-content/uploads/medias/post-157904/Apple-iPhone-15_-blue_featured-image-packshot-review.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h56/hbb/83559339065374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/hae/83559331856414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h71/hd3/83559331921950.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
    },
    {
      id: 2,
      name: 'Телевизор Samsung',
      description: 'Телевизор LED Samsung обеспечивает высокое качество картинки.',
      price: 278000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h9f/h2f/85887766233118.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h95/hf0/85887766298654.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000'
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13',
      description: 'Стильный дизайн и фантастическая тонкость - все это о ноутбуках серии Apple MacBook Air.',
      price: 654237,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/37156055.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/37156055.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pd5/p57/37156056.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pa2/p53/50302347.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mw133-138242483/?c=750000000'
    },
    {
      id: 4,
      name: 'Apple iPad Pro 11',
      description: 'Планшет Apple с Liquid Retina дисплеем и поддержкой Apple Pencil.',
      price: 514000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h90/hc6/86106948304926.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000'
    },
    {
      id: 5,
      name: 'Стекло A-case для Apple iPhone 15',
      description: 'Это удобное и практичное решение для сохранения экрана устройства.',
      price: 850,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/pd4/1316888.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p30/pd4/1316888.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/pa9/p4a/1316889.jpeg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/p6c/p00/1316890.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/steklo-a-case-dlja-apple-iphone-15-a-case-dlja-apple-iphone-15-chernyi-124414260/?c=750000000'
    },
    {
      id: 6,
      name: 'Клавиатура Ajazz AK820 Pro',
      description: 'Ajazz AK820 Pro- это не просто клавиатура, это совершенный инструмент для геймеров.',
      price: 24599,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/p20/24789953.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pbb/p20/24789953.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h06/h6d/85447302873118.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h97/hf9/85447302938654.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000'
    },
    {
      id: 7,
      name: 'Xbox Series X',
      description: 'Мощная игровая консоль Microsoft с поддержкой 4K и быстрой загрузкой.',
      price: 416800,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/hc8/h77/63982144585758.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h02/h0e/63982148255774.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000'
    },
    {
      id: 8,
      name: 'Умная колонка Apple HomePod',
      description: 'Колонка HomePod mini создана для того, чтобы воспроизводить музыку из Apple Music.',
      price: 89895,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hb2/63941318115358.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hfe/hb2/63941318115358.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h8c/hb6/63941320179742.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h9d/h9c/63941323358238.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-homepod-mini-oranzhevyi-105631665/?c=750000000'
    },
    {
      id: 9,
      name: 'Кроссовки adidas Adizero EVO SL',
      description: 'Кроссовки Adizero EVO SL Кроссовки, вдохновленные скоростью.',
      price: 109151,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcc/pe9/72580566.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pcc/pe9/72580566.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p0b/pe7/72580570.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pb6/pe6/72580573.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/krossovki-adidas-adizero-evo-sl-jh6206-belyi-chernyi-42-148001472/?c=750000000'
    },
    {
      id: 10,
      name: 'YAMAHA STORIA II/02',
      description: 'Тёплое звучание и уникальный дизайн STORIA II сочетает в себе выразительный внешний вид.',
      price: 250690,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/p5c/59166602.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p01/p5c/59166602.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p1d/p5c/59166603.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p39/p5c/59166604.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/gitara-akusticheskaja-yamaha-storia-ii-02-korichnevyi-144252027/?c=750000000'
    },
    {
      id: 11,
      name: 'Кофемашина Delonghi',
      description: 'Сочетает в себе множество возможностей для приготовления вкусного кофе а также простоту использования и надежность.',
      price: 229980,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pb7/pc9/90352567.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pda/pc6/90352572.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-ecam220-50-bg-bezhevyi-145399057/?c=750000000'
    },
    {
      id: 12,
      name: 'Карта памяти Hoco Flash ',
      description: '64-гигабайтная карта памяти Hoco Flash Micro SD подходит не только для совместного использования со смартфонами',
      price: 6549,
      rating: 3.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/h09/64182227238942.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/h09/64182227238942.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h35/h04/64182229925918.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h2b/h28/64182231040030.jpg?format=gallery-medium'],
      link: 'http://kaspi.kz/shop/p/hoco-flash-micro-sd-64-gb-103437435/?c=750000000'
    }
  ];

}
