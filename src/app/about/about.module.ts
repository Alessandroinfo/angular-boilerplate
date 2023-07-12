import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './components/about.component';
import {SharedModule} from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, AboutRoutingModule],
  declarations: [AboutComponent],
})
export class AboutModule {
  constructor() {}
}
