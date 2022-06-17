import {ApplicationRef, NgModuleRef} from '@angular/core';
import {createNewHosts} from '@angularclass/hmr';

export const hmrBootstrap = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  module: any,
  bootstrap: () => Promise<NgModuleRef<unknown>>
) => {
  let ngModule: NgModuleRef<unknown>;
  module.hot.accept();
  bootstrap().then((mod) => (ngModule = mod));
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map((c) => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
