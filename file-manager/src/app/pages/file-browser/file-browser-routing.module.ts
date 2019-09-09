import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FileBrowserComponent } from './file-browser.component';
import { AuthGuardService as AuthGuard } from '@services';

const routes: Routes = [
  {
    path: 'file-browser',
    children: [
      {
        path: '',
        component: FileBrowserComponent,
        canActivate: [AuthGuard],
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
export class FileBrowserRoutingModule { }
