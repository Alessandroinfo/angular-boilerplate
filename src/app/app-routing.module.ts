import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'module',
    loadChildren: () =>
      import('./module-name/module-name.module').then(
        (m) => m.ModuleNameModule
      )
  },
  // Fallback when no prior route is matched
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy', useHash: true})],
  // use , useHash: true for reoutes issue (Cordova too)
  exports: [RouterModule]
})
export class AppRoutingModule {
}
