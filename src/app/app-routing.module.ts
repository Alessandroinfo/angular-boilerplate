import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Shell} from '@app/shell/shell.service';

const routes: Routes = [
  // Use shell component for this lazy loaded about module
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    },
  ]),
  // Fallback when no prior route is matched
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  // use useHash: true for routes issue (Cordova too)
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
