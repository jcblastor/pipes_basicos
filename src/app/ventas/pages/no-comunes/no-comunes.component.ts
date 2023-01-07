import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  nombre: string = 'Carlos';
  genero: string = 'masculino';

  palabrasQueSelecionaI18nPipe = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  clientes: string[] = ['Carlos', 'Olga', 'Mili', 'tobi'];
  clientsMap = {
    '=0': 'No tenemos clientes esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    'other': 'Tenemos # clientes esperando',
  }

  cambiarNombre() {
    this.nombre = 'Olga';
    this.genero = 'femenino';
  }

  deleteClient() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Carlos',
    edad: '41',
    direcion: 'Cap-Federal Argentina'
  }

  heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'robin',
      vuela: false,
    },
    {
      nombre: 'acuaman',
      vuela: false,
    },
  ]

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    },2000)
  })
}
