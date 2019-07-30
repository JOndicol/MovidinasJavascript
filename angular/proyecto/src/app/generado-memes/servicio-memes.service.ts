import { Injectable, EventEmitter } from '@angular/core';
import { Meme } from './meme';

@Injectable({
  providedIn: 'root'
})
export class ServicioMemesService {

  public listaMemes: Array<Meme> = []

  constructor() { }

  getMemes():Array<Meme> {
    return this.listaMemes
  }

  addMeme(dato: Meme): void{
    this.listaMemes.push(dato)
  }
}
