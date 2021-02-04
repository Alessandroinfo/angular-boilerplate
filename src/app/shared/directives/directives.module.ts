import {NgModule} from '@angular/core';
import {BoxLineDirective} from '@app/shared/directives/box-line.directive';
import {OlDirective} from '@app/shared/directives/outline.directive';
import {ClickStopPropagationDirective} from './click-stop-propagation.directive';
import {ClickStopImmediatePropagationDirective} from './click-stop-immediate-propagation.directive';

@NgModule({
  declarations: [
    BoxLineDirective,
    OlDirective,
    ClickStopPropagationDirective,
    ClickStopImmediatePropagationDirective
  ],
  exports: [
    BoxLineDirective,
    OlDirective,
    ClickStopPropagationDirective,
    ClickStopImmediatePropagationDirective
  ]
})
export class DirectivesModule {
}
