import { TestBed } from '@angular/core/testing';

import { ClosetItems } from './closet-items';

describe('ClosetItems', () => {
  let service: ClosetItems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosetItems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
