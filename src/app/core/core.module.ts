import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderInterceptorService} from './loader-interceptor/loader-interceptor.service';
import {GenericFacilityService} from './generic-facility/generic-facility.service';
import {ApiService} from './api/api.service';
import {CommonModule} from '@angular/common';
import {ApiPrefixInterceptor} from '@app/core/http/api-prefix/api-prefix.interceptor';
import {ErrorHandlerInterceptor} from '@app/core/http/error-handler/error-handler.interceptor';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true, // Permit to use multi interceptor for http interceptors
    },
    ApiService,
    GenericFacilityService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
