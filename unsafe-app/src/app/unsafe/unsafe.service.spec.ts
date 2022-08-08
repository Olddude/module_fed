import { TestBed } from '@angular/core/testing';

import { UnsafeService } from './unsafe.service';

describe('UnsafeService', () => {
  let service: UnsafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsafeService]
    });
    service = TestBed.inject(UnsafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
