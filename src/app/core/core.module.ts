import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderInterceptorService} from './loader-interceptor/loader-interceptor.service';
import {GenericFacilityService} from './generic-facility/generic-facility.service';
import {ApiService} from './api/api.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ApiService,
    GenericFacilityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true, // PERMIT TO USE MULTI INTERCEPTOR FOR HTTP INTERCEPTORS
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
