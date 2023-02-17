import {PreventDefaultDirective} from './prevent-default.directive';
import {expect} from '@jest/globals';

describe('PreventDefaultDirective', () => {
  it('should create an instance', () => {
    const directive = new PreventDefaultDirective();
    expect(directive).toBeTruthy();
  });
});
