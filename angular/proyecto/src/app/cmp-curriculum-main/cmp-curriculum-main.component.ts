import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-curriculum-main',
  templateUrl: './cmp-curriculum-main.component.html',
  styleUrls: ['./cmp-curriculum-main.component.css']
})
export class CmpCurriculumMainComponent implements OnInit {

  nombre = ''
  apellidos = ''
  email = ''
  foto = ''
  skills: Array<string> = []

  constructor() { }

  ngOnInit() {
  }

  cambiar(event){
    this[event.propiedad] =  event.valor
  }
  // cambiarNombre(event){
  //   this.nombre = event.valor
  // }
  // cambiarApellidos(event){
  //   this.apellidos = event
  // }
  // cambiarMail(event){
  //   this.email = event
  // }
  // cambiarFoto(event){
  //   this.foto = event
  // }
  cambiarSkills(event){
    this.skills.push(event)
  }

}
