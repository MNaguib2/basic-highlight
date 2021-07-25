import {
  Directive,
  HostBinding,
  HostListener,
  OnInit
} from '@angular/core';
@Directive({
  selector: '[appGoodHighlight]'
})
export class HighlightDirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  constructor() {}
  ngOnInit() {}
  @HostListener('mouseenter') mouseenter(eventData: Event) {
      this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
      this.backgroundColor = 'transparent';
  }
}