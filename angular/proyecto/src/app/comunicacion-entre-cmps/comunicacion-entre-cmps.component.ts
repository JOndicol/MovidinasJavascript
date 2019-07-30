import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacion-entre-cmps',
  templateUrl: './comunicacion-entre-cmps.component.html',
  styleUrls: ['./comunicacion-entre-cmps.component.css']
})
export class ComunicacionEntreCmpsComponent implements OnInit {
  nombreLuke = 'Luke';
  nombreLeia = 'Leia';
  
  constructor() { }

  ngOnInit() {
  }

  cambiarNombreLeia(event){
    this.nombreLeia = event
  }

}
