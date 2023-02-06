import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {BoxLineModel} from '@app/shared/models/box-line';

@Directive({
  selector: '[appBoxLine]',
})
export class BoxLineDirective implements OnInit {
  @Input() appBoxLine: BoxLineModel = {
    border: {
      style: 'solid',
      color: 'blue',
      size: '2px',
    },
    outline: {
      style: 'dashed',
      color: 'red',
      size: '2px',
    },
  };

  constructor(public el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.outline = [
      this.appBoxLine.outline?.size,
      this.appBoxLine.outline?.style,
      this.appBoxLine.outline?.color,
    ].join(' ');

    this.el.nativeElement.style.border = [
      this.appBoxLine.border?.size,
      this.appBoxLine.border?.style,
      this.appBoxLine.border?.color,
    ].join(' ');
  }
}
