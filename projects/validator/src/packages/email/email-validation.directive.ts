import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, forwardRef} from '@angular/core';
import {emailFromControlValidator} from '@validator';


@Directive({
  standalone: true,
  selector: '[email-validator][formControl],[email-validator][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidationDirective),
      multi: true
    },
  ],
})
export class EmailValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return emailFromControlValidator(control);
  }
}
