import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiciansSearchBarComponent } from './physicians-search-bar.component';

describe('PhysiciansSearchBarComponent', () => {
  let component: PhysiciansSearchBarComponent;
  let fixture: ComponentFixture<PhysiciansSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysiciansSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiciansSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
