import {AbstractControl, ValidationErrors} from '@angular/forms';
import {EMAIL_VALIDATION_ERROR_KEY} from '@validator';
import {isEmptyInputValue} from '../../internal/validation-util';

export const isEmailValid= (value: string): boolean => {
  return !!value.match(/^([a-zA-Z0-9]+[_.-]?)*[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,2}$/);
};

export const emailFromControlValidator = (control: AbstractControl): ValidationErrors | null  => {
  if (isEmptyInputValue(control.value)) {
    return null;
  }

  const isValid = isEmailValid(control.value);
  return {...control.errors, [EMAIL_VALIDATION_ERROR_KEY]: !isValid};
};
