import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertOutletComponent } from './alert-outlet/alert-outlet.component';



@NgModule({
  declarations: [AlertComponent, AlertOutletComponent],
  exports: [
    AlertComponent,
    AlertOutletComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AlertModule { }
