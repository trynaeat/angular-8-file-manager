import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager.component';
import { ToArrayModule } from '@pipes';



@NgModule({
  declarations: [PagerComponent],
  exports: [PagerComponent],
  imports: [
    CommonModule,
    ToArrayModule,
  ]
})
export class PagerModule { }
