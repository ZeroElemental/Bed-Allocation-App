import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySidebar } from './activity-sidebar';

describe('ActivitySidebar', () => {
  let component: ActivitySidebar;
  let fixture: ComponentFixture<ActivitySidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitySidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitySidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
