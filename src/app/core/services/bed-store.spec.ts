import { TestBed } from '@angular/core/testing';

import { BedStore } from './bed-store';

describe('BedStore', () => {
  let service: BedStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
