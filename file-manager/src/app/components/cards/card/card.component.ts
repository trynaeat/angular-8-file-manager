import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) public template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
