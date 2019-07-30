import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-cmp-meme',
  templateUrl: './cmp-meme.component.html',
  styleUrls: ['./cmp-meme.component.css']
})
export class CmpMemeComponent implements OnInit {

  @Input() meme:Meme = new Meme()

  constructor() { }

  ngOnInit() {
  }

  
}
