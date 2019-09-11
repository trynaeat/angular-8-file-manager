import { Component, EventEmitter, Input, SimpleChanges, Output, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() public totalItems: number;
  @Input() public pageSize = 8;
  @Input() public page = 1;
  @Output() public pageChange = new EventEmitter<number>();

  public pages: number;

  constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.pageSize || changes.totalItems) {
      this.pages = Math.floor(this.totalItems / this.pageSize);
      if (this.totalItems % this.pageSize) {
        this.pages += 1;
      }
    }
  }

  public onClick(page: number) {
    if (page === this.page) {
      return;
    }
    this.page = page;
    this.pageChange.emit(this.page);
  }

}
