import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInMemoryComponent } from './http-in-memory.component';

describe('HttpInMemoryComponent', () => {
  let component: HttpInMemoryComponent;
  let fixture: ComponentFixture<HttpInMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpInMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpInMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
