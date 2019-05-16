import { TestBed } from '@angular/core/testing';

import { BookStoreDbService } from './book-store-db.service';

describe('BookStoreDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookStoreDbService = TestBed.get(BookStoreDbService);
    expect(service).toBeTruthy();
  });
});
