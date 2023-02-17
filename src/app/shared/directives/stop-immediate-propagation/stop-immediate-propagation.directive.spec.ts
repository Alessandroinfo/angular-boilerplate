import {StopImmediatePropagationDirective} from './stop-immediate-propagation.directive';
import {expect} from '@jest/globals';

describe('StopImmediatePropagationDirective', () => {
  it('should create an instance', () => {
    const directive = new StopImmediatePropagationDirective();
    expect(directive).toBeTruthy();
  });
});
