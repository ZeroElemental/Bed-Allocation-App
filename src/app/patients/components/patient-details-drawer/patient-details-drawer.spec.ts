import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsDrawer } from './patient-details-drawer';

describe('PatientDetailsDrawer', () => {
  let component: PatientDetailsDrawer;
  let fixture: ComponentFixture<PatientDetailsDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
