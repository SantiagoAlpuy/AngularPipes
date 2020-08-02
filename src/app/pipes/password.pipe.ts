import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean): unknown {
    let nombre:string = value;
    if (active){
      nombre = '*'.repeat(value.length);
    }
    return nombre;
  }

}
