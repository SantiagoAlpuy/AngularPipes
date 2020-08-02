import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Santiago Alpuy';
  nombre2: string = 'sAntIAgo ALpUy';
  numeros = [1,2,3,4,5,6,7,8,9,10];
  PI : number = Math.PI;
  porcentaje: number = 0.234; 
  salario: number = 1234.5;
  fecha : Date = new Date();
  idioma: string = 'fr';
  videoUrl: string = 'https://www.youtube.com/embed/F1NQop_MfDc';
  activar : boolean = true;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout( () => {
      resolve('llego la data');
    }, 4500);
  } )

  creador = {
    nombre: 'Santiago',
    apellido: 'Alpuy',
    edad: 28,
    pais: 'Uruguay',
    direccion: {
      calle: 'Garibaldi',
      numero: 1969
    }
  };

}
