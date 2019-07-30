import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit{

  @Input('appBlink') colorLetra

  @HostBinding('style.color') color

  ngOnInit(){
    setInterval(() => {
      this.color = this.color === 'black' ? this.colorLetra: 'black'
    }, 300)
    
  }

}
