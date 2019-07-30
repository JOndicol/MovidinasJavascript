import { Pipe, PipeTransform } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter((mascota) => {
      mascota.includes(args[0])
    });
  }

}
