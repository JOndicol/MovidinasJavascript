import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datos: Array<string> = ['a', 'b', 'c']
  datoEnviado = new EventEmitter<string>()

  constructor(private logService: LogService) { }

  getDato(): Array<string> {
    return this.datos
  }

  addDato(dato: string): void{
    this.datos.push(dato)
    this.logService.mostrarMensajesPorConsola('Se ha guardado ' + dato)
  }

  enviarDato(dato: string):void{
    this.datoEnviado.emit(dato)
  }
}
