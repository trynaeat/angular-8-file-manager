import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { HeaderModule } from '@components';
import { HomeComponent } from './pages/home/home.component';
import { ApiModule } from '@api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    ApiModule.forRoot({ baseUrl: 'https://server' }),

    LoginModule,
    AppRoutingModule,

    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
