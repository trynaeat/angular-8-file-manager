import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';
import { TimeAgoModule } from '@pipes';



@NgModule({
  declarations: [ToastComponent],
  exports: [ToastComponent],
  imports: [
    CommonModule,

    TimeAgoModule,
  ],
  providers: [
    ToastService,
  ],
})
export class ToastModule { }
