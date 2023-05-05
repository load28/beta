import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

const CORE_MODULE = [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
