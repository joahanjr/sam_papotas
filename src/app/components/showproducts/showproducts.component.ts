import { Component } from '@angular/core';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.scss']
})
export class ShowproductsComponent {

  mostrarPapas: boolean = true;
  mostrarBotanas: boolean = false;

  togglePapas(): void {
    this.mostrarPapas = true;
    this.mostrarBotanas = false;
  }

  toggleBotanas(): void {
    this.mostrarPapas = false;
    this.mostrarBotanas = true;
  }
}
