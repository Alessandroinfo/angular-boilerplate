import {TestBed} from '@angular/core/testing';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

import {CredentialsService} from '@app/auth/services/credentials.service';
import {MockCredentialsService} from './credentials.service.mock';
import {AuthenticationGuard} from '@app/auth/services/authentication.guard';
import {expect, jest} from '@jest/globals';

describe('AuthenticationGuard', () => {
  let authenticationGuard: AuthenticationGuard;
  let credentialsService: MockCredentialsService;
  let mockRouter: any;
  let mockSnapshot: any;

  beforeEach(() => {
    mockRouter = {
      navigate: jest.fn(),
    };
    mockSnapshot = jest.fn(() => ({
      toString: jest.fn(),
    }));

    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        {provide: CredentialsService, useClass: MockCredentialsService},
        {provide: Router, useValue: mockRouter},
      ],
    });

    authenticationGuard = TestBed.inject(AuthenticationGuard);
    credentialsService = TestBed.inject(CredentialsService);
  });

  it('should have a canActivate method', () => {
    expect(typeof authenticationGuard.canActivate).toBe('function');
  });

  it('should return true if user is authenticated', () => {
    expect(authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(true);
  });

  it('should return false and redirect to login if user is not authenticated', () => {
    // Arrange
    credentialsService.credentials = null;

    // Act
    const result = authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);

    // Assert
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: {redirect: undefined},
      replaceUrl: true,
    });
    expect(result).toBe(false);
  });

  it('should save url as queryParam if user is not authenticated', () => {
    credentialsService.credentials = null;
    mockRouter.url = '/about';
    mockSnapshot.url = '/about';

    authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: {redirect: mockRouter.url},
      replaceUrl: true,
    });
  });
});
