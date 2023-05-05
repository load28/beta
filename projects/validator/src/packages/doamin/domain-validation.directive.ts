import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {domainFromControlValidator} from "./domain-validation.service";


@Directive({
  standalone: true,
  selector: '[domain-validator][formControl],[domain-validator][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DomainValidationDirective),
      multi: true
    },
  ],
})
export class DomainValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return domainFromControlValidator(control);
  }
}
