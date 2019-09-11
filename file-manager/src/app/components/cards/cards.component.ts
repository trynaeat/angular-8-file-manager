import { Component, ContentChildren, Input, OnInit, QueryList, AfterContentInit } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterContentInit {
  @ContentChildren(CardComponent) public cards: QueryList<CardComponent>;
  @Input() public columns = 4;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
