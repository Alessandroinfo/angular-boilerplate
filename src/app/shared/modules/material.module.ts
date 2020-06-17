import {NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MODULES = [
  MatProgressBarModule,
  MatProgressSpinnerModule,
];

const PROVIDERS = [];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [...PROVIDERS]
})

export class MaterialModule {
  constructor() {
  }
}
