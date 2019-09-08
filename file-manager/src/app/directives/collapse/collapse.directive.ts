import { Directive, Input, ElementRef, OnInit, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective implements OnInit, OnChanges {
  @Input() public expanded = false;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  public ngOnInit() {
    const height = this.element.nativeElement.scrollHeight;
    this.renderer.addClass(this.element.nativeElement, 'collapse');
    if (this.expanded) {
      this.renderer.setStyle(this.element.nativeElement, 'height', 'auto');
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.expanded.isFirstChange()) {
      return;
    }
    const height = this.element.nativeElement.scrollHeight;
    requestAnimationFrame(() => {
      this.renderer.setStyle(this.element.nativeElement, 'height', `${height}px`);
      const unlisten = this.renderer.listen(this.element.nativeElement, 'transitionend', () => {
        if (this.expanded) {
          this.renderer.setStyle(this.element.nativeElement, 'height', 'auto');
        }
        this.renderer.removeClass(this.element.nativeElement, 'collapsing');
        unlisten();
      });
      if (!this.expanded) {
        requestAnimationFrame(() => {
          this.renderer.setStyle(this.element.nativeElement, 'height', '0px');
        });
      }
      this.renderer.addClass(this.element.nativeElement, 'collapsing');
    });
  }

}
