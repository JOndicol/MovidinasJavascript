import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-preview-cv',
  templateUrl: './cmp-preview-cv.component.html',
  styleUrls: ['./cmp-preview-cv.component.css']
})
export class CmpPreviewCvComponent implements OnInit {
  @Input() nombre=''
  @Input() apellidos=''
  @Input() email=''
  @Input() foto=''
  @Input() skills: Array<string> = []
  
  constructor() { }

  ngOnInit() {
  }

}
