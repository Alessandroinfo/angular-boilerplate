import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {OlModel} from '@app/shared/models/outline';

@Directive({
  selector: '[appOutline]',
})
export class OutlineDirective implements OnInit {
  @Input() appOutline: OlModel = {
    style: 'dashed',
    color: '#ff00006b',
    size: '1px',
  };

  constructor(public el: ElementRef) {}

  ngOnInit() {
    const el: HTMLElement = this.el.nativeElement;
    el.style.outline = [this.appOutline.size, this.appOutline.style, this.appOutline.color].join(' ');
  }
}
