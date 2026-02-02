import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeConfirmDialog } from './discharge-confirm-dialog';

describe('DischargeConfirmDialog', () => {
  let component: DischargeConfirmDialog;
  let fixture: ComponentFixture<DischargeConfirmDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DischargeConfirmDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DischargeConfirmDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
