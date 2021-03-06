import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  // providers: [DatosService]
})
export class CmpAComponent implements OnInit {

  datos:Array<string> = []

  constructor(private datosService:DatosService) { }

  ngOnInit() {
    this.datos = this.datosService.getDato()
  }

  guardarDato(dato:string): void{
    this.datosService.addDato(dato)
  }

  enviarDato(dato:string): void{
    this.datosService.enviarDato(dato)
  }

}
