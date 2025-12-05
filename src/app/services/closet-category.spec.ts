import { TestBed } from '@angular/core/testing';

import { ClosetCategory } from './closet-category';

describe('ClosetCategory', () => {
  let service: ClosetCategory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosetCategory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
