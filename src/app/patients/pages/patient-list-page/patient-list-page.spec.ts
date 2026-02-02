import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListPage } from './patient-list-page';

describe('PatientListPage', () => {
  let component: PatientListPage;
  let fixture: ComponentFixture<PatientListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
