import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFilter } from './patient-filter';

describe('PatientFilter', () => {
  let component: PatientFilter;
  let fixture: ComponentFixture<PatientFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
