import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainFromControlValidator, emailFromControlValidator, passwordFromControlValidator } from '@validator';
import { Observable, Subscription } from 'rxjs';
import { LoginParams } from './login-api.model';
import { LoginFormGroupData } from './login.model';


@Component({
  standalone: true,
  selector: 'app-login',
  template: `
    <form class="login-form"
          [formGroup]="formGroup">
      <div class="login-input-container">
        <input class="login-input"
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
              (click)="onClickLoginButton()">login
      </button>
    </form>
  `,
  styleUrls: [ './login.scss' ],
  imports: [
    NgIf,
    JsonPipe,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  private destroyRef = inject(DestroyRef);
  private httpClient = inject(HttpClient);

  readonly formGroup = new FormGroup({
    email: new FormControl<string | null>(null, [ Validators.required, domainFromControlValidator, emailFromControlValidator ]),
    pwd: new FormControl<string | null>(null, [ Validators.required, passwordFromControlValidator ]),
  });

  private loginApiSubByLoginButton = new Subscription();

  onClickLoginButton(): void {
    const formData = this.getLoginFormData();
    if (!this.isNotNullLoginFormData(formData)) {
      return;
    }

    this.cancelApi(this.loginApiSubByLoginButton);
    const loginApi$ = this.getLoginApi$(formData);

    this.loginApiSubByLoginButton = loginApi$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (res) => {
        this.login(res);
      }
    });
  }

  private getLoginFormData(): LoginFormGroupData {
    return this.formGroup.getRawValue();
  }

  private isNotNullLoginFormData(formData: LoginFormGroupData): formData is LoginParams {
    return !!formData.email && !!formData.pwd;
  }

  private getLoginApi$(formData: LoginParams): Observable<any> {
    return this.httpClient.post('/login', formData);
  }

  private cancelApi(apiSubscription: Subscription): void {
    if (apiSubscription) {
      apiSubscription.unsubscribe();
    }
  }

  private login(res: any): void {
    console.log(res);
  }
}
