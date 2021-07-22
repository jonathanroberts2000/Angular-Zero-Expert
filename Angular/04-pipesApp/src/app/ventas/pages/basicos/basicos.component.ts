import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'jonathan'
  nombreUpper: string = 'JONATHAN';
  nombreCompleto: string = 'jOnAtHaN rOBertS';

  fecha: Date = new Date(); // el día de hoy
}
