import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Logger} from '@app/core/logger/logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        return this.errorHandler(error);
      })
    );
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<unknown>): Observable<HttpEvent<unknown>> {
    log.error('Request error', response);

    throw response;
  }
}
