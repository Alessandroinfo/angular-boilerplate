import {TestBed} from '@angular/core/testing';
import {expect} from '@jest/globals';
import {GenericFacilityService} from './generic-facility.service';

describe('GenericFacilityService', () => {
  let service: GenericFacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericFacilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
