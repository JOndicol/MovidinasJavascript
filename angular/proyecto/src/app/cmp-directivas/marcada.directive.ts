import { Directive , HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appMarcada]'
})
export class MarcadaDirective {

  @Input() colorFondo = 'yellow'
  colorInicial = 'white'

  @HostBinding('style.backgroundColor') color
  @HostListener('mouseover') onmouseover(){
    this.color = this.colorFondo
  }

  @HostListener('mouseleave') onmouseleave(){
    this.color = this.colorInicial
  }

  constructor() { 
  }

}
