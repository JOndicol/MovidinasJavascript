import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let cadenaReverse = ''
    for(let i = value.length; i >= 0; i--){
      cadenaReverse = cadenaReverse + value.charAt(i)
    }
    return cadenaReverse;
  }

}
