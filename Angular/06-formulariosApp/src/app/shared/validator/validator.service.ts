import { ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  noPuedeSerStrider(control: FormControl): ValidationErrors | null{
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === "strider"){
      return {
        noStrider: true
      };
    }
    return null;
  }

}
