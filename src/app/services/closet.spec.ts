import { TestBed } from '@angular/core/testing';

import { Closet } from './closet';

describe('Closet', () => {
  let service: Closet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Closet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
