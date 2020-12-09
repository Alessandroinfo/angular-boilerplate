import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VersionComponent} from './components/version/version.component';
import {LoaderComponent} from './components/loader/loader.component';
import {MaterialModule} from './modules/material.module';

@NgModule({
  declarations: [VersionComponent, LoaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, VersionComponent, LoaderComponent]
})
export class SharedModule {
}
