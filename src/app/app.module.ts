import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {UserInfoService} from './user-info.service';

const CORE_MODULE = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
];

const COMMON_MODULE = [
  HttpClientModule,
];

const STANDALONE_COMPONENT = [
  LoginComponent,
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...CORE_MODULE,
    ...COMMON_MODULE,
    ...STANDALONE_COMPONENT,
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
