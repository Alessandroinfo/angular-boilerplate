/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from '@env/environment';
import {AppModule} from '@app/app.module';

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

// Different bootstraps
if (environment.cordova) {
  // TODO:critical Check if cordova app boot correctly
  // Content loaded for deviceready Cordova API
  document.addEventListener('deviceready', bootstrap, false);
} else {
  // Default
  if (document.readyState === 'complete') {
    bootstrap();
  } else {
    // Content loaded
    document.addEventListener('DOMContentLoaded', bootstrap);
  }
}
