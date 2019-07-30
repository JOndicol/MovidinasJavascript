import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  datosGuardados:boolean = false

  constructor() { }

  ngOnInit() {
  }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    if(this.datosGuardados){
      return true
    }
    
    return confirm('Estas seguro de que quieres salir? Perderas los cambios...')
  }

}
