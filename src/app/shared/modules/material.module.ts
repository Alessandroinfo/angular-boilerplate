/*
 * This module imports and re-exports all Angular Material modules for convenience,
 * so only 1 module import is needed in your feature modules.
 * See https://material.angular.io/guide/getting-started#step-3-import-the-component-modules.
 *
 * To optimize your production builds, you should only import the components used in your app.
 */

import {NgModule, Provider} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';

const MODULES = [
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatInputModule,
];

const PROVIDERS: Provider[] = [];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [...PROVIDERS],
})
export class MaterialModule {
  constructor() {}
}
