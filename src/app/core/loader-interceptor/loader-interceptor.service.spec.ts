import {TestBed} from '@angular/core/testing';
import {expect} from '@jest/globals';
import {LoaderInterceptorService} from './loader-interceptor.service';

describe('LoaderInterceptorService', () => {
  let service: LoaderInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
