import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'currencyRight'
})
export class CurrencyRightPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let curr:string = value.charAt(0)
    value = value.replace(curr,'')
    return value + curr;
  }

}
