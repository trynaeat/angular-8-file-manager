import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() appClickOutside = new EventEmitter();

  constructor(
    private element: ElementRef,
  ) { }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.element.nativeElement.contains(event.target)) {
      this.appClickOutside.emit();
    }
  }

}
