import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileBrowserModule } from './pages/file-browser/file-browser.module';
import { LoginModule } from './pages/login/login.module';
import { HeaderModule, ToastModule } from '@components';
import { HomeComponent } from './pages/home/home.component';
import { ApiModule } from '@api';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ApiModule.forRoot({ baseUrl: 'https://0.0.0.0:3000' }),

    LoginModule,
    FileBrowserModule,
    AppRoutingModule,

    HeaderModule,
    ToastModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
