import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickStopImmediatePropagation]'
})
export class ClickStopImmediatePropagationDirective {

  constructor() {
  }

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopImmediatePropagation();
  }
}

