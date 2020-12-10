import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {BoxLineModel} from '@app/shared/models/box-line';

@Directive({
  selector: '[bl]'
})
export class BoxLineDirective implements OnInit {

  @Input() bl: BoxLineModel = {
    border: {
      style: 'solid',
      color: 'blue',
      size: '2px'
    },
    outline: {
      style: 'dashed',
      color: 'red',
      size: '2px'
    }
  };

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.outline = [this.bl.outline.size, this.bl.outline.style, this.bl.outline.color].join(' ');
    this.el.nativeElement.style.border = [this.bl.border.size, this.bl.border.style, this.bl.border.color].join(' ');
  }
}

