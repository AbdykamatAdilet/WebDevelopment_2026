import { Injectable } from '@angular/core';
import { Product } from '../models/product_model';
import { Category } from '../models/category_model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    {
        id: 1,
        name: 'iPhone 15',
        description: 'Современный смартфон Apple с мощным процессором и отличной камерой.',
        price: 589000,
        rating: 4.8,
        image: 'https://www.dxomark.com/wp-content/uploads/medias/post-157904/Apple-iPhone-15_-blue_featured-image-packshot-review.jpg',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h56/hbb/83559339065374.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h2e/hae/83559331856414.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h71/hd3/83559331921950.png?format=gallery-medium'
                ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id: 2,
        name: 'iPhone 17 Pro',
        description: 'Современный смартфон Apple с мощным процессором и отличной камерой.',
        price: 849000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
                ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id: 3,
        name: 'Apple MacBook Air 13',
        description: 'Стильный дизайн и фантастическая тонкость.',
        price: 654237,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/37156055.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/37156055.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pd5/p57/37156056.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pa2/p53/50302347.jpg?format=gallery-medium'
                ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mw133-138242483/?c=750000000',
        likes: 0,
        categoryId: 2
    },
    {
        id: 4,
        name: 'Apple iPad Pro 11',
        description: 'Планшет Apple с Liquid Retina дисплеем.',
        price: 514000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h90/hc6/86106948304926.png?format=gallery-medium'
                ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
        likes: 0,
        categoryId: 4
    },
    {
        id: 5,
        name: 'Наушники Logitech G Pro',
        description: 'Практичное решение для игрового стиля',
        price: 151950,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p17/108132263.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pcf/p17/108132263.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/p8e/p77/77991086.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/pab/p77/77991087.png?format=gallery-medium'
                ],
        link: 'https://kaspi.kz/shop/p/steklo-a-case-dlja-apple-iphone-15-a-case-dlja-apple-iphone-15-chernyi-124414260/?c=750000000',
        likes:0,
        categoryId: 3
    },
    {
        id: 6,
        name: 'Redmi A3x',
        description: 'Это мощное устройство с высокой производительностью и стильным дизайном.',
        price: 53000,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-medium'
                ],
        link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id: 7,
        name: 'Ноутбук Lenovo IdeaPad 3',
        description: 'Lenovo ideapad 3 располагает всем необходимым для реализации учебных проектов',
        price: 289000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2c/65053326376990.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h1a/hbf/65053329457182.jpg?format=gallery-medium'
                ],
        link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-win-11-15iau7-82rk00ewrk-107333284/?c=750000000',
        likes: 0,
        categoryId: 2
    },
    {
        id: 8,
        name: 'Sony WH-1000XM4',
        description: 'Совмещают в себе нашу лучшую технологию шумоподавления',
        price: 489990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p80/pde/11569143.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pb8/pde/11569145.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm4-chernyi-100471997/?c=750000000',
        likes: 0,
        categoryId: 3
    },
    {
        id: 9,
        name: 'Samsung Galaxy S25',
        description: 'Флагманский смартфон с передовыми технологиями, мощным процессором',
        price: 400000,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p39/p03/20107708.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p95/p00/20107711.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133432433/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id: 10,
        name: 'Apple MacBook Air 13',
        description: 'Глаз отдыхает и радуется.',
        price: 440399,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
        likes: 0,
        categoryId: 2
    },
    {
        id: 11,
        name: 'Apple AirPods Max 2 оранжевый',
        description: 'Простота использования и надежность.',
        price: 293980,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p9e/p7a/3533067.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p9e/p7a/3533067.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pfa/p77/3533070.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p66/p7a/3533069.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-oranzhevyi-128624151/?c=750000000',
        likes: 0,
        categoryId: 3
    },
    {
        id: 12,
        name: 'Наушники MOONDROP',
        description: 'Отличные наушники для спорта',
        price: 6549,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa6/p87/109866366.jpeg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa6/p87/109866366.jpeg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pe3/p91/109866369.jpeg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p35/pe7/109866373.jpeg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/naushniki-moondrop-blessing-3-belyi-158249003/?c=750000000',
        likes: 0,
        categoryId: 3
    },
    {
        id: 13,
        name: 'Наушники Huawei FreeClip',
        description: 'с креплением на клипсы удобны для спорта и активного образа жизни.',
        price: 189900,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p3a/pf7/28982572.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p3a/pf7/28982572.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p02/pf7/28982574.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/ped/pf3/28982581.jpg?format=gallery-medium'
            ],
        link: 'http://kaspi.kz/shop/p/naushniki-huawei-freeclip-zolotistyi-135967889/?c=750000000',
        likes: 0,
        categoryId: 3
    },
    {
        id: 14,
        name: 'Смартфон OPPO A78',
        description: 'Обеспечивает быструю работу приложений и игр.',
        price: 88980,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pb9/pfc/64346868.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p31/pfa/64346870.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id: 15,
        name: 'Планшет Huawei MatePad',
        description: 'Все что нужно для комфортной работы уже есть в планшете, не надо ничего покупать и искать.',
        price: 224990,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/p46/65766777.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p12/p46/65766777.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p9e/p0b/65766805.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0b/65766807.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-seryi-podarok-145939457/?c=750000000',
        likes: 0,
        categoryId: 4
    },
    {
        id: 16,
        name: 'Планшет Xiaomi Redmi Pad 2',
        description: 'Универсальный планшет с большим экраном и мощным процессором для работы',
        price: 129980,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p54/p05/46316410.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p70/p05/46316411.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-zelenyi-140640475/?c=750000000',
        likes: 0,
        categoryId: 4
    },
    {
        id: 17,
        name: 'Ноутбук Biraz EVO N95',
        description: 'Это мощное и современное решение для повседневных задач, учебы и работы',
        price: 195000,
        rating: 4.1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pdd/pf8/41734530.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p15/pf9/41734532.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/biraz-evo-n95-15-6-16-gb-ssd-512-gb-win-11-brz-evo-n95-139514916/?c=750000000',
        likes: 0,
        categoryId: 2
    },
    {
        id: 18,
        name: 'Samsung Galaxy Tab S10 Ultra',
        description: 'Мощное устройство с впечатляющим экраном и высокой производительностью',
        price: 580000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p19/paa/1647300.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pa6/paa/1647305.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000',
        likes: 0,
        categoryId: 4
    },
    {
        id: 19,
        name: 'Ноутбук HYDRA Home H20',
        description: 'Это Казахстанский бренд электроники и гаджетов для дома.',
        price: 135000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p7d/p51/36556289.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p6f/p03/36556305.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000',
        likes: 0,
        categoryId: 2
    },
    {
        id: 20,
        name: 'SmartTech SmartTech Pad2',
        description: 'Универсальный планшет с док-станцией для работы, развлечений и творчества',
        price: 590000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pbe/pd1/39017268.jpeg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pbe/pd1/39017268.jpeg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p54/pce/39017269.jpeg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pd5/p7f/39017271.jpeg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/smarttech-smarttech-pad2-32-djuim-8-gb-128-gb-belyi-138766320/?c=750000000',
        likes: 0,
        categoryId: 4
    }
    ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    if (categoryId === 0) {
        return this.products;
    }
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
