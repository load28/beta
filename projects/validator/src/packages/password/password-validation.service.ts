import {AbstractControl, ValidationErrors} from '@angular/forms';
import {isEmptyInputValue} from '../../internal/validation-util';
import {
  PASSWORD_MAX_LEN_ERROR_KEY,
  PASSWORD_MIN_LEN_ERROR_KEY,
  PASSWORD_SPACIAL_CHAR_ERROR_KEY,
  PASSWORD_VALIDATION_ERROR_KEY
} from "./password-validation.constant";
import {PasswordValidResultType} from "./password-validation.model";

export const isPasswordValid= (value: string): PasswordValidResultType => {
  const isMinLenValid = /^.{8,}$/.test(value);
  const isMaxLenValid = /^.{0,14}$/.test(value);
  const isSpacialCharValid = /[!@#]/.test(value);

  return {
      [PASSWORD_MIN_LEN_ERROR_KEY]: !isMinLenValid,
      [PASSWORD_MAX_LEN_ERROR_KEY]: !isMaxLenValid,
      [PASSWORD_SPACIAL_CHAR_ERROR_KEY]: !isSpacialCharValid,
    }
};

export function isValidWithPasswordValidationResult(validationResult: PasswordValidResultType): boolean {
  return Object.values(validationResult).every((isError) => !isError);
}

export const passwordFromControlValidator = (control: AbstractControl): ValidationErrors | null  => {
  if (isEmptyInputValue(control.value)) {
    return null;
  }

  const validationResult = isPasswordValid(control.value);
  return isValidWithPasswordValidationResult(validationResult) ? null : {[PASSWORD_VALIDATION_ERROR_KEY]: validationResult};
};
