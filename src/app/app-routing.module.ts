import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: 'module',
    loadChildren: () =>
      import('./module-name/module-name.module').then(
        (m) => m.ModuleNameModule
      )
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
