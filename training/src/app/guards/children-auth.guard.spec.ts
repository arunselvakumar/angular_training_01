import { TestBed, async, inject } from '@angular/core/testing';

import { ChildrenAuthGuard } from './children-auth.guard';

describe('ChildrenAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildrenAuthGuard]
    });
  });

  it('should ...', inject([ChildrenAuthGuard], (guard: ChildrenAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
