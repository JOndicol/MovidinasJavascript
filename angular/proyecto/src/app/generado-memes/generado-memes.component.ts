import { Component, OnInit, Input } from '@angular/core';
import { ServicioMemesService } from './servicio-memes.service'
import { Meme } from './meme';

@Component({
  selector: 'app-generado-memes',
  templateUrl: './generado-memes.component.html',
  styleUrls: ['./generado-memes.component.css']
})
export class GeneradoMemesComponent implements OnInit {

  public listaAux = this.servicioMeme.getMemes()
  public meme: Meme = new Meme()

  constructor(private servicioMeme: ServicioMemesService) { }

  ngOnInit() {
  }

  mostrar(event){
    this.meme = event
  }
  
}
