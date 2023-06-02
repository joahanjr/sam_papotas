import { Component } from '@angular/core';

import {Product} from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] = [
    {
      sabores: 'Caja de papas',
      image: '../../../assets/img/cajaPapas.jpeg',
      backImage: '../../../assets/img/papasQueso.jpeg',
      flipped: false,
    },
    {
    sabores: 'Naturales',
    image: '../../../assets/img/naturales.jpeg',
    backImage: '../../../assets/img/papasNaturales.jpeg',
    flipped: false,
    },
    {
      sabores: 'Queso',
      image: '../../../assets/img/queso.jpeg',
      backImage: '../../../assets/img/papasQueso.jpeg',
      flipped: false,
    },
    {
      sabores: 'Adobadas',
      image: '../../../assets/img/adobadas.jpeg',
      backImage: '../../../assets/img/papasAdobada.jpeg',
      flipped: false,
    },
    {
      sabores: 'Chile de árbol',
      image: '../../../assets/img//chileArbol.jpeg',
      backImage: '../../../assets/img/papasQueso.jpeg',
      flipped: false,
    },
    {
      sabores: 'Chile de árbol con ajo',
      image: '../../../assets/img/chileArbolAjo.jpeg',
      backImage: '../../../assets/img/papasQueso.jpeg',
      flipped: false,
    },
    {
      sabores: 'Jalapeño',
      image: '../../../assets/img/jalapeño.jpeg',
      backImage: '../../../assets/img/papasQueso.jpeg',
      flipped: false,
    },
    {
      sabores: 'Takis fuego',
      image: '../../../assets/img/takisFuego.jpeg',
      backImage: '../../../assets/img/papasTakisFuego.jpeg',
      flipped: false,
    },
    {
      sabores: 'Flamming lemon',
      image: '../../../assets/img/flamingLemon.jpeg',
      backImage: '../../../assets/img/papasQueso.jpeg',
      flipped: false,
    },
    {
      sabores: 'Lemon pepper',
      image: '../../../assets/img/lemonPepper.jpeg',
      backImage: '../../../assets/img/papasLemonpepper.jpeg',
      flipped: false,
    },
    {
      sabores: 'Ajo',
      image: '../../../assets/img/ajo.jpeg',
      backImage: '../../../assets/img/papasQueso.jpeg',
      flipped: false,
    },
  ];


  rotataImage(products: Product): void {
    products.flipped = !products.flipped;
  }
}
