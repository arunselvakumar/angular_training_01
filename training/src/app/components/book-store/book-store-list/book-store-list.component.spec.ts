import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreListComponent } from './book-store-list.component';

describe('BookStoreListComponent', () => {
  let component: BookStoreListComponent;
  let fixture: ComponentFixture<BookStoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
