import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {domainFromControlValidator, emailFromControlValidator, passwordFromControlValidator} from '@validator';
import {NonNullableType} from '../util-types';
import {LoginFormGroupDataType} from './login.model';


@Component({
  standalone: true,
  selector: 'app-login',
  template: `
    <form class="login-form"
          [formGroup]="formGroup">
      <div class="login-input-container">
        <input
          class="login-input"
          type="email"
          placeholder="Email"
          [class.login-input--error]="!formGroup.controls.email.valid"
          [formControl]="formGroup.controls.email">
      </div>
      <div class="login-input-container">
        <input class="login-input"
               type="password"
               placeholder="Password"
               [formControl]="formGroup.controls.pwd">
      </div>
      <button *ngIf="formGroup.valid"
              class="login-button"
              type="button"
              (click)="onLogin()">login</button>
    </form>
  `,
  styles: [
    `
      :host {
        @apply w-full h-screen flex flex-col justify-center items-center;
      }

      .login-form {
        @apply flex flex-col gap-8 w-96;
      }

      .login-input-container {
        @apply relative;
      }

      .login-input {
        @apply h-12 text-xl px-3 py-1 border-2 border-gray-400 focus:border-blue-400 rounded-lg w-full;
      }

      .login-button {
        @apply text-lg bg-indigo-500 rounded-lg h-10 px-3 py-1 text-slate-50;
      }
    `
  ],
  imports: [
    NgIf,
    JsonPipe,
    AsyncPipe,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  private httpClient = inject(HttpClient);

  readonly formGroup = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, domainFromControlValidator, emailFromControlValidator] ),
    pwd: new FormControl<string | null>(null, [Validators.required, passwordFromControlValidator]),
  });

  onLogin(): void {
    const formData = this.formGroup.getRawValue();
    if(!this.loginFormDataNullableTypeGuard(formData)) {
      return;
    }

    this.loginApiRequest$(formData);
  }

  private loginFormDataNullableTypeGuard(formData: LoginFormGroupDataType): formData is NonNullableType<LoginFormGroupDataType> {
    return !!formData.email && !!formData.pwd;
  }

  private loginApiRequest$(formData: NonNullableType<LoginFormGroupDataType>) {
    // todo suspense를 어떻게 관리할것인가?
    this.httpClient.post('/login', formData).pipe(
      takeUntilDestroyed(),
    ).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
}
