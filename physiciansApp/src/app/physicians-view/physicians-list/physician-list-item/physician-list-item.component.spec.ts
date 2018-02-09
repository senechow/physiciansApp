import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianListItemComponent } from './physician-list-item.component';

describe('PhysicianComponent', () => {
  let component: PhysicianListItemComponent;
  let fixture: ComponentFixture<PhysicianListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
