import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appStopPropagation]',
})
export class StopPropagationDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    event.stopPropagation();
  }
}
