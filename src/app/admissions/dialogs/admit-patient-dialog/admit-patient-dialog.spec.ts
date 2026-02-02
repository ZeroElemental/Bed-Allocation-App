import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitPatientDialog } from './admit-patient-dialog';

describe('AdmitPatientDialog', () => {
  let component: AdmitPatientDialog;
  let fixture: ComponentFixture<AdmitPatientDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmitPatientDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmitPatientDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
