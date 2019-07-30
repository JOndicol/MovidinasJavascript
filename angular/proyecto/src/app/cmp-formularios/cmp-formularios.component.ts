import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-cmp-formularios',
  templateUrl: './cmp-formularios.component.html',
  styleUrls: ['./cmp-formularios.component.css']
})
export class CmpFormulariosComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('angel', [Validators.required, this.esUnStark]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    })
  }

  login(){
    console.log(this.form)
  }

  esUnStark(control: FormControl){
    const nombresValidos = ['robb', 'arya', 'rickon', 'sansa', 'bran', 'toni', 'ned']

    if(nombresValidos.includes(control.value.toLowerCase())){
      return null
    }

    return {
      esUnStark: false
    }

  }



}
