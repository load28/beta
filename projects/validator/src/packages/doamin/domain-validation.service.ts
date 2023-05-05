import {AbstractControl, ValidationErrors} from '@angular/forms';
import {isEmptyInputValue} from '../../internal/validation-util';
import {DOMAIN_VALIDATION_ERROR_KEY} from "./domain-validation.constant";

export const isDomainValid= (value: string): boolean => {
  return !!value.match(/./);
};

export const domainFromControlValidator = (control: AbstractControl): ValidationErrors | null  => {
  if (isEmptyInputValue(control.value)) {
    return null;
  }

  const isValid = isDomainValid(control.value);
  return isValid ? null : {[DOMAIN_VALIDATION_ERROR_KEY]: !isValid};
};
