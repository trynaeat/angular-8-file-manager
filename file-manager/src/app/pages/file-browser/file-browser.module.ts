import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileBrowserComponent } from './file-browser.component';
import { FileBrowserRoutingModule } from './file-browser-routing.module';



@NgModule({
  declarations: [FileBrowserComponent],
  imports: [
    CommonModule,
    FileBrowserRoutingModule,
  ],
})
export class FileBrowserModule { }
