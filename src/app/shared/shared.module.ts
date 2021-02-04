import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VersionComponent} from './components/version/version.component';
import {LoaderComponent} from './components/loader/loader.component';
import {MaterialModule} from './modules/material.module';
import {PipesModule} from '@app/shared/pipes/pipes.module';
import {DirectivesModule} from '@app/shared/directives/directives.module';
import {SkipLinkComponent} from './components/skip-link/skip-link.component';

@NgModule({
  declarations: [VersionComponent, LoaderComponent, SkipLinkComponent],
  imports: [CommonModule, MaterialModule, PipesModule, DirectivesModule],
  exports: [CommonModule, MaterialModule, PipesModule, DirectivesModule, VersionComponent, LoaderComponent, SkipLinkComponent]
})
export class SharedModule {
}
