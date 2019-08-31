import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginRoutingModule { }
