import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '@env/environment';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HomeModule} from '@app/home/home.module';
import {ShellModule} from '@app/shell/shell.module';
import {AuthModule} from '@app/auth';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

// App divided into:
// Core module: only singleton one instantiated services
// Shared module: component, pipe, directive, other common module for UI
// App-shell contain only first painted static html component

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    RouterModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  providers: [
    // Cordova plugins
    Keyboard,
    StatusBar,
    SplashScreen
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
