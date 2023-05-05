import {AsyncPipe} from '@angular/common';
import {Component, effect, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {EmailValidationDirective} from '@validator';


@Component({
  standalone: true,
  selector: 'app-login',
  template: `
    <form class="login-form"
          [formGroup]="formGroup">
      <div class="login-input-container">
        <input
          email-validator
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
    `
  ],
  imports: [
    AsyncPipe,
    EmailValidationDirective,
    ReactiveFormsModule,
  ],
})
export class LoginComponent implements OnInit {
  user = signal<string | null>(null);

  effectRef = effect((onCleanup) => {
    this.formGroup.controls.email.setValue(this.user());

    onCleanup(() => this.formGroup.reset({email: 'reset'}));
  });

  formGroup = new FormGroup({
    email: new FormControl<string | null>(null ),
    pwd: new FormControl<string | null>(null),
  });

  ngOnInit() {
    this.effectRef.destroy();
    setTimeout(() => this.user.set('10'), 3000);
  }
}