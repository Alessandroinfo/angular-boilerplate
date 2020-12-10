import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '@app/app.module';
import {environment} from './environments/environment';
import {hmrBootstrap} from './hmr';

if (environment.production) {
  enableProdMode();
}
// Without HMR
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

// HMR
/* tslint:disable:no-string-literal */
if (environment.hmr) {
  console.log(environment);
  if (module['hot']) {
    // Remove this if you want to preserve log
    console.clear();

    // Bootstrap with HMR
    module['hot'].accept();
    hmrBootstrap(module, bootstrap);

    // With NGXS
    // import('@ngxs/hmr-plugin').then(plugin => {
    //   plugin.hmr(module, bootstrap,
    //     {
    //       autoClearLogs: true
    //     }).catch((err: Error) => console.error(err));
    // });
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {

  if (!environment.cordova) {
    // Content loaded
    document.addEventListener('DOMContentLoaded', () => {
      bootstrap().catch((err) => console.error(err));
    });
  } else {
    // Content loaded for deviceready Cordova API
    document.addEventListener('deviceready', () => {
      bootstrap().catch((err) => console.error(err));
    }, false);
  }

}
