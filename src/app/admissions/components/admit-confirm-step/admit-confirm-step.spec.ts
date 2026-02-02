import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitConfirmStep } from './admit-confirm-step';

describe('AdmitConfirmStep', () => {
  let component: AdmitConfirmStep;
  let fixture: ComponentFixture<AdmitConfirmStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmitConfirmStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmitConfirmStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
