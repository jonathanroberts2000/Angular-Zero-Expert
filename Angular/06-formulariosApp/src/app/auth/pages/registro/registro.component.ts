import { EmailValidatorService } from './../../../shared/validator/email-validator.service';
import { ValidatorService } from './../../../shared/validator/validator.service';
//import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from './../../../shared/validator/validaciones';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    //nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    //email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    //username: ['', [Validators.required, noPuedeSerStrider]]
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required]
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jonathan Roberts',
      email: "test1@test.com",
      username: "jonathan_r00"
    });
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(): void{
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
