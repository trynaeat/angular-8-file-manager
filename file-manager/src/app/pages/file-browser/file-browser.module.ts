import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileBrowserComponent } from './file-browser.component';
import { FileBrowserRoutingModule } from './file-browser-routing.module';
import { CardsModule, PagerModule } from '@components';



@NgModule({
  declarations: [FileBrowserComponent],
  imports: [
    CommonModule,

    FileBrowserRoutingModule,
    CardsModule,
    PagerModule,
  ],
})
export class FileBrowserModule { }
