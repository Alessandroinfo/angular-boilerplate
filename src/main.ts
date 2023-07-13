/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from '@env/environment';
import {AppModule} from '@app/app.module';
import {Logger} from '@app/core/logger/logger.service';

bootstrapLogManagement();

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

function bootstrapLogManagement() {
  // If production its true
  if (environment.production) {
    enableProdMode();

    // Setup logger
    Logger.enableProductionMode();
  }

  // If you want disable log depending
  // on the environment configuration
  if (!environment.logConsole) {
    Logger.disableLog();
  }

  /**
   * Console messages on boot
   */
  console.group('%c Welcome to Angular-boilerplate console.', 'background: black; color: #2ec4b6');
  console.log('%c Environment: ' + environment.env, 'background: black; color: #2ec4b6');
  console.log('%c Version: ' + environment.appVersion, 'background: black; color: #2ec4b6');
  console.log(
    '%c WARNING: THIS IS A TOOL FOR DEVELOPERS ONLY. BE CAREFUL WHAT YOU DO HERE.',
    'background: black; color: red'
  );
  console.groupEnd();
}
