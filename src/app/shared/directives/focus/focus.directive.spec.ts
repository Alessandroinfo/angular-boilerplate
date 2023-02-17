import {FocusDirective} from './focus.directive';
import {ElementRef} from '@angular/core';
import {expect} from '@jest/globals';

describe('FocusDirective', () => {
  it('should create an instance', () => {
    const elementRef: ElementRef = new ElementRef<any>('');
    const directive = new FocusDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
