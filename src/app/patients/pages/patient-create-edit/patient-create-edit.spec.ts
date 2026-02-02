import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCreateEdit } from './patient-create-edit';

describe('PatientCreateEdit', () => {
  let component: PatientCreateEdit;
  let fixture: ComponentFixture<PatientCreateEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientCreateEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCreateEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
