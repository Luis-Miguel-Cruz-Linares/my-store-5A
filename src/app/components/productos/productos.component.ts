import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  products: Product[] = [
    {
      id:'1',
      name: 'El mejor producto',
      price: 865,
      image: './assets/images/toy.jpg'
    },
    {
      id:'2',
      name: 'Bici casi nueva',
      price: 365,
      image: './assets/images/bike.jpg'
    },
    {
      id:'3',
      name: 'Album',
      price: 765,
      image: './assets/images/album.jpg'
    },
    {
      id:'4',
      name: 'Mis libros',
      price: 565,
      image: './assets/images/books.jpg'
    },
    {
      id:'5',
      name: 'Gafas para la playa',
      price: 565,
      image: './assets/images/glasses.jpg'
    },
    {
      id:'6',
      name: 'Para tu mascota',
      price: 165,
      image: './assets/images/house.jpg'
    }

  ];

}
