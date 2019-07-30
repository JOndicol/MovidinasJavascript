import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {

    args.forEach(hiddenWord => {
      let regexp = new RegExp(hiddenWord, 'g')
      value = value.replace(regexp,'*'.repeat(hiddenWord.length))
    })

    // let individualWords = value.split(' ')
    
    // args.forEach(hiddenWord => {

    //   for(let i in individualWords){
    //     if(hiddenWord === individualWords[i]){
    //       let hidder = '*'.repeat(individualWords[i].length)
    //       individualWords[i] = hidder
    //     }
    //   }

    // })

    // let hiddenSentece = individualWords.join(' ')
    // return hiddenSentece;
    return value
  }

}
