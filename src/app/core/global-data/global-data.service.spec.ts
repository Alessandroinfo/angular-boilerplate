import {TestBed} from '@angular/core/testing';
import { jest, expect} from '@jest/globals';
import {GlobalDataService} from './global-data.service';

describe('GlobalDataService', () => {
  let service: GlobalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
