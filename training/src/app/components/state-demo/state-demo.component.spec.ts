import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDemoComponent } from './state-demo.component';

describe('StateDemoComponent', () => {
  let component: StateDemoComponent;
  let fixture: ComponentFixture<StateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
