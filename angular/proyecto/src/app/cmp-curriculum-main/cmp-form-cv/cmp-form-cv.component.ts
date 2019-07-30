import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

class mensajero{
  propiedad:string
  valor:string

  mensajero(propiedad, valor){
    this.propiedad = propiedad
    this.valor = valor
  }
}

@Component({
  selector: 'app-cmp-form-cv',
  templateUrl: './cmp-form-cv.component.html',
  styleUrls: ['./cmp-form-cv.component.css']
})

export class CmpFormCvComponent implements OnInit {

  @Input() nombre = ''
  @Input() apellidos = ''
  @Input() email = ''
  @Input() foto = ''
  @Input() skills: Array<string> = []

  transmisorDeETS = new mensajero()
  @Output() eventoTransmisor = new EventEmitter<mensajero>()

  @Output() eventoNombre = new EventEmitter<string>()
  @Output() eventoApellidos= new EventEmitter<string>()
  @Output() eventoMail = new EventEmitter<string>()
  @Output() eventoFoto = new EventEmitter<string>()
  @Output() eventoSkills = new EventEmitter<Array<string>>()


  constructor() { }

  ngOnInit() {
  }

  enviar(val, prop){
    this.transmisorDeETS.propiedad = prop
    this.transmisorDeETS.valor = val
    this.eventoTransmisor.emit(this.transmisorDeETS)
    
    //this.eventoNombre.emit(val)
  }
  // enviarApellidos(val){
  //   this.eventoApellidos.emit(val)
  // }
  // enviarMail(val){
  //   this.eventoMail.emit(val)
  // }
  // enviarFoto(val){
  //   this.eventoFoto.emit(val)
  // }
  enviarSkills(val){
    this.eventoSkills.emit(val)
  }

  agregarSkill(skill){
    this.skills.push(skill)
  }

}
