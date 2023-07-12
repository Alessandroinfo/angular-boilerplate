import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Logger} from '@app/core/logger/logger.service';
import {Injectable} from '.pnpm/@angular+core@15.2.9_rxjs@7.5.5_zone.js@0.11.6/node_modules/@angular/core';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        return this.errorHandler(error);
      })
    );
  }

  // Customize the default error handler here if needed
  private errorHandler(
    response: HttpEvent<unknown>
  ): Observable<HttpEvent<unknown>> {
    log.error('Request error', response);

    throw response;
  }
}
