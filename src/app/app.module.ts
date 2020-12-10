import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// App divided into:
// Core module: only singleton one instantiated services
// Shared module: component, pipe, directive, other common module for UI
// App-shell contain only first painted static html component

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
