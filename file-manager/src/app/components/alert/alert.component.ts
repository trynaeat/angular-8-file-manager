import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() public hidden = false;
  @Output() public hiddenChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public hide() {
    this.hidden = true;
    this.hiddenChange.emit(this.hidden);
  }

}
