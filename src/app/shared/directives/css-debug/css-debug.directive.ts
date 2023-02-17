import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appCssDebug]',
})
export class CSSDebugDirective implements OnInit {
  constructor(public el: ElementRef) {}

  ngOnInit() {
    const el: HTMLElement = this.el.nativeElement;
    el.className = 'css-debug ' + el.className;
  }
}
