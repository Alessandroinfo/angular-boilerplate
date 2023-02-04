import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {AppShellComponent} from '@shared/components/app-shell/app-shell.component';

const routes: Routes = [{path: 'shell', component: AppShellComponent}];

@NgModule({
  imports: [AppModule, ServerModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
  exports: [AppShellComponent],
  })
export class AppServerModule {
  // The important part to avoid route ** bug and not show shell compo:
  constructor(private router: Router) {
    this.router.resetConfig(routes);
  }
}
