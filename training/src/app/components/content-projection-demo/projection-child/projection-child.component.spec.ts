import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionChildComponent } from './projection-child.component';

describe('ProjectionChildComponent', () => {
  let component: ProjectionChildComponent;
  let fixture: ComponentFixture<ProjectionChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
