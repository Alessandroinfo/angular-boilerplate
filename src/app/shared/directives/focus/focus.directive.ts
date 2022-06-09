import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnChanges {
  @Input() appFocus = false;
  @Input() focusDelay = 0;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges() {
    this.checkFocus();
  }

  private checkFocus() {
    if (
      this.appFocus &&
      document.activeElement !== this.elementRef.nativeElement
    ) {
      const focus = () => {
        this.elementRef.nativeElement.focus();
      };
      // Even without a delay, we wait for the next JavaScript tick
      // to avoid causing changes on parent components (e.g., the
      // TextInput component) that have already been checked on this
      // change detection cycle.
      setTimeout(focus, this.focusDelay);
    }
  }
}
