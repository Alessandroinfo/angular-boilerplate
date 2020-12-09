import {NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

const MODULES = [
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatDividerModule
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
