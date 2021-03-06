import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Jonathan';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural - Slice
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Jonathan'];
  clienteMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente(): void {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Jonathan',
    edad: 20,
    direccion: 'Lanús Oeste, Argentina',
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data del promise');
    }, 3500);
  });
}
