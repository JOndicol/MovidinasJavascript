import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Meme } from '../meme';

import{ ServicioMemesService } from '../servicio-memes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-memes',
  templateUrl: './formulario-memes.component.html',
  styleUrls: ['./formulario-memes.component.css']
})
export class FormularioMemesComponent implements OnInit {

  @Output() eventoMeme = new EventEmitter<Meme>()
  form:FormGroup
  
  constructor(private servicioMeme:ServicioMemesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      color: this.formBuilder.control(''),
      textoArriba: this.formBuilder.control('', Validators.required),
      textoAbajo: this.formBuilder.control('',  Validators.required),
      url: this.formBuilder.control('',  Validators.required),
    })
  }

  crearMeme(id, color, textoArriba, textoAbajo, url, isFav): void{
    let memeNuevo = new Meme(id, color, textoArriba, textoAbajo, url, isFav)
    this.servicioMeme.addMeme(memeNuevo)
    this.eventoMeme.emit(memeNuevo)
  }
}
