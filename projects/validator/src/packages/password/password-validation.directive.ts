import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {passwordFromControlValidator} from "./password-validation.service";


@Directive({
  standalone: true,
  selector: '[password-validator][formControl],[password-validator][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordValidationDirective),
      multi: true
    },
  ],
})
export class PasswordValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return passwordFromControlValidator(control);
  }
}
