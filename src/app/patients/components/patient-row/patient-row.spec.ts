import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRow } from './patient-row';

describe('PatientRow', () => {
  let component: PatientRow;
  let fixture: ComponentFixture<PatientRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
