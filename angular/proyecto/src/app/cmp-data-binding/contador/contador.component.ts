import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  cont:number= 0;


  constructor() { }

  ngOnInit() {
  }

  sumarContador(){
    this.cont += 1;
  }

  restarContador(){
    this.cont -= 1;
  }

}
