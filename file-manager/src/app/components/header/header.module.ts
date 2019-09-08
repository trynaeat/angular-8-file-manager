import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule, CollapseModule } from '@directives';



@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,

    ClickOutsideModule,
    CollapseModule,
  ]
})
export class HeaderModule { }
