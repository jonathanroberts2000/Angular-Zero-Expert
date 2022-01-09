import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  /*miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  });*/

  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.min(0), Validators.required]],
    existencias: [null, [Validators.min(0), Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    /*SI
    this.miFormulario.reset({
      precio: 1600,
      existencias: 10
    });*/

    /*NO
    this.miFormulario.setValue({
      precio: 1600,
      existencias: 10
    });*/
  }

  campoEsValido(campo: string): boolean | null {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(): void{
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
