import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  miFormulario: FormGroup = new FormGroup({
    'nombre': new FormControl('RTX 4080ti')
  });

  constructor() { }

}
