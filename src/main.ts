/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '@app/app.module';
import {environment} from '@env/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (!environment.cordova) {
  // Content loaded
  document.addEventListener('DOMContentLoaded', () => {
    bootstrap().catch((err) => console.error(err));
  });
} else {
  // Content loaded for deviceready Cordova API
  document.addEventListener(
    'deviceready',
    () => {
      bootstrap().catch((err) => console.error(err));
    },
    false
  );
}
