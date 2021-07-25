import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[appHighlight]'
})
export class basichighlightdirective {
    //*
    @Input() appHighlight = '';
    constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
//*/
}