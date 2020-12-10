import {NgModule} from '@angular/core';
import {BoxLineDirective} from '@app/shared/directives/box-line.directive';
import {OlDirective} from '@app/shared/directives/outline.directive';

@NgModule({
  declarations: [BoxLineDirective, OlDirective],
  exports: [BoxLineDirective, OlDirective]
})
export class DirectivesModule {
}
