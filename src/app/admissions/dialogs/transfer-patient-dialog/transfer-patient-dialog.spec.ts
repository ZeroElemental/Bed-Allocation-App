import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPatientDialog } from './transfer-patient-dialog';

describe('TransferPatientDialog', () => {
  let component: TransferPatientDialog;
  let fixture: ComponentFixture<TransferPatientDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferPatientDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferPatientDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
