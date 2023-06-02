import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  tittle: string = 'SAM PAPOTAS';
  img: string = '../../../assets/img/logo.jpeg';
}
