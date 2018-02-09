import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiciansViewComponent } from './physicians-view.component';

describe('PhysiciansViewComponent', () => {
  let component: PhysiciansViewComponent;
  let fixture: ComponentFixture<PhysiciansViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysiciansViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiciansViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
