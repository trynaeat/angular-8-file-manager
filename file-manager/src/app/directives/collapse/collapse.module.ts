import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from './collapse.directive';



@NgModule({
  declarations: [CollapseDirective],
  exports: [CollapseDirective],
  imports: [
    CommonModule
  ]
})
export class CollapseModule { }
