import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLocaleLowerCase();
    let nombres:string[] = value.split(" ");
    
    nombres = nombres.map( nombre => {
      return nombre[0].toUpperCase() + nombre.substr(1);
    })
    
    return nombres.join(" ");
  }

}
