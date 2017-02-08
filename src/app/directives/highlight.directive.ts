/**
 * Created by User on 2/8/2017.
 */

import {Directive, ElementRef, Input, HostListener} from '@angular/core'

@Directive({selector: '[ExtendComboboxHighlight]'})
export class HighlightDirective {
  constructor(private el: ElementRef){
    el.nativeElement.style.backgroundColor = 'skyblue';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('skyblue');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
