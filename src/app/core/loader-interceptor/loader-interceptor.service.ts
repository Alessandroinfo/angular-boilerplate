import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {GlobalDataService} from '../global-data/global-data.service';
import {GenericFacilityService} from '../generic-facility/generic-facility.service';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private gcfSvc: GenericFacilityService, private gldSvc: GlobalDataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // CHECK IF EXIST NO BLOCK OVERLAY HEADER
    const blockoverlay = this.gldSvc.loadingHeaders.blockOverlay;
    const BLOCKOVERLAY_H = !!request.headers.get(blockoverlay);

    // CHECK IF EXIST NO BLOCK OVERLAY HEADER
    const centerloader = this.gldSvc.loadingHeaders.centerLoader;
    const CENTERLOADER_H = !!request.headers.get(centerloader);

    // CHECK IF EXIST NO BLOCK OVERLAY HEADER
    const toploader = this.gldSvc.loadingHeaders.topLoader;
    const TOPLOADER_H = !!request.headers.get(toploader);

    // CHECK IF ALMOST ONE IS TRUE FOR NOT CLONE HEADERS WITHOUT MOTIVATIONS
    if (TOPLOADER_H || BLOCKOVERLAY_H || CENTERLOADER_H) {
      let headers = request.clone().headers;

      // IF EXIST DELETE NO LOADING HEADER
      if (TOPLOADER_H) {
        headers = headers.delete(toploader);
      }

      // IF EXIST DELETE NO BLOCK OVERLAY HEADER
      if (BLOCKOVERLAY_H) {
        headers = headers.delete(blockoverlay);
      }

      // IF EXIST DELETE NO BLOCK OVERLAY HEADER
      if (CENTERLOADER_H) {
        headers = headers.delete(centerloader);
      }

      // CREATE NEW REQUEST WITH CHECK BEFORE
      request = request.clone({
        headers,
      });
    }

    // SET THE LOADING STATUS ON THE SERVICE
    // -- CONDITIONS
    // TOP LOADER AND OVERLAY
    // TOP LOADER
    // OVERLAY
    // CENTER AND OVERLAY
    // CENTER
    // EVERY TIME IS LOADING
    setTimeout(() => {
      if (TOPLOADER_H && BLOCKOVERLAY_H) {
        this.gcfSvc.setLoadingState({
          ...this.gldSvc.loadingDefaultOffState,
          isLoading: true,
          topLoading: true,
          blockOverlay: true,
        });
      } else if (TOPLOADER_H) {
        this.gcfSvc.setLoadingState({
          ...this.gldSvc.loadingDefaultOffState,
          isLoading: true,
          topLoading: true,
        });
      } else if (CENTERLOADER_H) {
        this.gcfSvc.setLoadingState({
          ...this.gldSvc.loadingDefaultOffState,
          isLoading: true,
          centerLoading: true,
          blockOverlay: true,
        });
      } else if (BLOCKOVERLAY_H) {
        this.gcfSvc.setLoadingState({
          ...this.gldSvc.loadingDefaultOffState,
          isLoading: true,
          blockOverlay: true,
        });
      } else {
        this.gcfSvc.setLoadingState({
          ...this.gldSvc.loadingDefaultOffState,
          isLoading: true,
        });
      }
    });

    // RETURN THE SAME REQUEST CALLED AND MANAGE THE OFF OF LOADING
    return next.handle(request).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          setTimeout(() => {
            this.gcfSvc.setLoadingState(this.gldSvc.loadingDefaultOffState);
          });
        }
      }),
      // IF THERE IS SOME ERRORS GO TO OFF LOADING AND RETURN ERRORS
      catchError((err: HttpEvent<unknown>) => {
        setTimeout(() => {
          this.gcfSvc.setLoadingState(this.gldSvc.loadingDefaultOffState);
        });

        return throwError(() => err);
      })
    );
  }
}
