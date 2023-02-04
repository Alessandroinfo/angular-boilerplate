import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appStopImmediatePropagation]',
  })
export class StopImmediatePropagationDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    event.stopImmediatePropagation();
  }
}
