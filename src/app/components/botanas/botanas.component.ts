import { Component } from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-botanas',
  templateUrl: './botanas.component.html',
  styleUrls: ['./botanas.component.scss']
})
export class BotanasComponent {
  botanas: Product[] = [
    {
      image:'../../../assets/botanas/butifarra.jpeg',
      sabores:'Butifarra'
    },
    {
      image:'../../../assets/botanas/carneMolida.jpeg',
      sabores:'Carne Molida'
    },
    {
      image:'../../../assets/botanas/costilla.jpeg',
      sabores:'Costilla Frita'
    },
    {
      image:'../../../assets/botanas/ensaladaCamarón.jpeg',
      sabores:'Ensalada de camarón'
    },
    {
      image:'../../../assets/botanas/macabil.jpeg',
      sabores:'Macabil'
    },
    {
      image:'../../../assets/botanas/tinga.jpeg',
      sabores:'Tinga de pollo'
    }
  ];
}
