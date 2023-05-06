import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {domainFromControlValidator, emailFromControlValidator, passwordFromControlValidator} from '@validator';
import {UserInfoService} from '../user-info.service';
import {LoginParams} from './login-api.model';
import {LoginFormGroupData} from './login.model';

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
                  (click)="onLogin()">login
          </button>
      </form>
      {{userName() | json}}
      {{userName() | json}}
  `,
  styleUrls: ['./login.scss'],
  imports: [
    NgIf,
    JsonPipe,
    AsyncPipe,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  private destroyRef = inject(DestroyRef);
  private httpClient = inject(HttpClient);
  private userService = inject(UserInfoService);

  readonly formGroup = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, domainFromControlValidator, emailFromControlValidator] ),
    pwd: new FormControl<string | null>(null, [Validators.required, passwordFromControlValidator]),
  });

  readonly userName = this.userService.getUserName();

  onLogin(): void {
    const formData = this.formGroup.getRawValue();
    if(!this.loginFormDataNullableTypeGuard(formData)) {
      return;
    }

    this.loginApiRequest$(formData);
  }

  private loginFormDataNullableTypeGuard(formData: LoginFormGroupData): formData is LoginParams {
    return !!formData.email && !!formData.pwd;
  }

  private loginApiRequest$(formData: LoginParams) {
    // todo suspense를 어떻게 관리할것인가?
    this.httpClient.post('/login', formData).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
}
