import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import { ToArrayModule } from '@pipes';



@NgModule({
  declarations: [CardsComponent, CardComponent],
  exports: [
    CardsComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,

    ToArrayModule,
  ]
})
export class CardsModule { }
