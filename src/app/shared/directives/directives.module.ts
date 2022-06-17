import {NgModule} from '@angular/core';
import {BoxLineDirective} from '@app/shared/directives/box-line/box-line.directive';
import {OutlineDirective} from '@app/shared/directives/outline/outline.directive';
import {StopPropagationDirective} from './stop-propagation/stop-propagation.directive';
import {PreventDefaultDirective} from './prevent-default/prevent-default.directive';
import {StopImmediatePropagationDirective} from './stop-immediate-propagation/stop-immediate-propagation.directive';
import {FocusDirective} from './focus/focus.directive';

@NgModule({
  declarations: [
    BoxLineDirective,
    OutlineDirective,
    StopPropagationDirective,
    PreventDefaultDirective,
    StopImmediatePropagationDirective,
    FocusDirective,
  ],
  exports: [
    BoxLineDirective,
    OutlineDirective,
    StopPropagationDirective,
    FocusDirective,
  ],
})
export class DirectivesModule {}
