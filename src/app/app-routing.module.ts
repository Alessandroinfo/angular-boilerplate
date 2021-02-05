import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // Fallback when no prior route is matched
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy', useHash: true})],
  // use useHash: true for routes issue (Cordova too)
  exports: [RouterModule]
})
export class AppRoutingModule {
}
