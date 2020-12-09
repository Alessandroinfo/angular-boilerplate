import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {OlModel} from '@app/shared/models/outline';

@Directive({
  selector: '[ol]'
})
export class OlDirective implements OnInit {

  @Input() ol: OlModel = {
    style: 'dashed',
    color: '#ff00006b',
    size: '1px'
  };

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.outline = [this.ol.size, this.ol.style, this.ol.color].join(' ');
  }
}

